// Vercel Build Output API function entry.
//
// The Build Output Node launcher invokes the default export as a classic Node
// `(req, res)` handler — NOT a web handler. TanStack Start emits a portable web
// fetch handler (dist/server/server.js), so we adapt: Node IncomingMessage → web
// Request, run the fetch handler, stream the web Response back onto ServerResponse.
// Node 22 has global Request/Response/Headers/ReadableStream.
//
// Bundled (with its deps + the SSR handler's dynamic ./assets chunks) into
// .vercel/output/functions/render.func/index.mjs by build-vercel.sh.
import type { IncomingMessage, ServerResponse } from "node:http";

import handler from "./dist/server/server.js";

const fetchHandler = handler as {
  fetch: (request: Request) => Response | Promise<Response>;
};

const toWebRequest = (
  req: IncomingMessage,
  path: string = req.url ?? "/",
): Request => {
  const host = req.headers.host ?? "localhost";
  const proto =
    (req.headers["x-forwarded-proto"] as string | undefined) ?? "https";
  const url = `${proto}://${host}${path}`;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) for (const v of value) headers.append(key, v);
    else if (value != null) headers.set(key, value);
  }
  const method = req.method ?? "GET";
  const hasBody = method !== "GET" && method !== "HEAD";
  return new Request(url, {
    method,
    headers,
    ...(hasBody
      ? { body: req as unknown as ReadableStream, duplex: "half" }
      : {}),
  } as RequestInit);
};

// A path like "/assets/foo.js" that misses the static filesystem handler must
// not be served the homepage: only fall back for extension-less document paths.
const looksLikeStaticFile = (pathname: string): boolean => {
  const last = pathname.split("?")[0].split("/").pop() ?? "";
  return last.includes(".");
};

export default async function vercelHandler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  try {
    let webRes = await fetchHandler.fetch(toWebRequest(req));

    // SPA-style fallback: TanStack Start returns 404 + an HTML document for
    // paths with no matching route (this one-page site only defines "/"). The
    // Build Output catch-all intentionally routes every path to this function,
    // so serve the homepage for unmatched, extension-less GETs instead of a
    // bare 404 — a visitor hitting a stray path still sees the site.
    const isUnmatchedDoc =
      webRes.status === 404 &&
      (req.method ?? "GET") === "GET" &&
      (webRes.headers.get("content-type") ?? "").includes("text/html") &&
      !looksLikeStaticFile(req.url ?? "/");
    if (isUnmatchedDoc) {
      webRes = await fetchHandler.fetch(toWebRequest(req, "/"));
    }

    res.statusCode = webRes.status;
    webRes.headers.forEach((value, key) => res.setHeader(key, value));
    if (webRes.body) {
      const reader = webRes.body.getReader();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    // Log the detail server-side (captured by the host's function logs); never
    // return a stack trace to the public visitor of the site.
    console.error("[team-site] SSR request failed", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}
