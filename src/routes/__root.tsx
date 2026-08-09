import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

const TITLE =
  "Modern Landscape & Home Improvement | Orlando Handyman & Landscaping";
const DESCRIPTION =
  "Modern Landscape and Home Improvement provides handyman, landscaping, repairs, painting, drywall and property improvement services throughout Orlando. Call (689) 325-2800 for a free estimate.";

// LocalBusiness schema — spec §8. No invented address; hours Su–F 24h, Sa closed.
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Modern Landscape and Home Improvement",
  description:
    "Handyman, landscaping, lawn care, repairs, painting, drywall and home improvement services in Orlando, Florida & surrounding areas.",
  telephone: "+1-689-325-2800",
  areaServed: [
    { "@type": "City", name: "Orlando" },
    { "@type": "State", name: "Florida" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "11",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "00:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  knowsAbout: [
    "Handyman Services",
    "Home Improvement & Remodeling",
    "Home Maintenance",
    "Drywall Repair",
    "Fixture Installation",
    "Furniture Assembly",
    "Painting",
    "Plumbing Repairs",
    "Electrical Fixture Replacement",
    "Landscaping & Lawn Work",
    "Hedge Trimming",
    "Palm Tree Removal",
    "LED Lighting Installation",
    "Retail Shelving Installation & Upgrades",
    "Commercial Improvement Work",
    "Residential Improvement Work",
    "Contractor Repair Work",
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#1E3B2F" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%231E3B2F'/%3E%3Ctext x='50' y='68' font-size='52' text-anchor='middle'%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
      },
    ],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
