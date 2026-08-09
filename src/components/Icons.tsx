import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const StarIcon = (props: P) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95L12 2.5z" />
  </svg>
);

export const PhoneIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const CheckIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.4}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const WrenchIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const HomeIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

export const HammerIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
    <path d="M17.64 15L22 10.64" />
    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
  </svg>
);

export const ScissorsIcon = (props: P) => (
  <svg {...base(props)}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.12 15.88" />
    <path d="M14.47 14.48L20 20" />
    <path d="M8.12 8.12L12 12" />
  </svg>
);

export const PaintIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M19.4 5.6a2.5 2.5 0 0 0-3.5-3.5L9 9l5.6 5.6 4.8-9z" />
    <path d="M9 9L4.2 13.8a2 2 0 0 0 0 2.8l3.2 3.2a2 2 0 0 0 2.8 0L15 14.6" />
    <path d="M6.5 14.5l3 3" />
    <path d="M18 16c0 1.5-1.5 2-1.5 3.5S18 21 18 21s1.5-1 1.5-3.5S18 16 18 16z" />
  </svg>
);

export const LeafIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export const PalmIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M7 21h10" />
    <path d="M12 21V10" />
    <path d="M12 10c-3 0-5.5-1.5-7-4 3-.5 5.5 0 7 2 1.5-2 4-2.5 7-2-1.5 2.5-4 4-7 4z" />
    <path d="M12 7c-1.8-1.5-2.5-3.5-2.5-5.5C11.8 2 13 3.5 13.5 5 14.5 3.5 16 2.5 18 2.5 17.5 5 15.5 6.5 12 7z" />
  </svg>
);

export const BulbIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z" />
  </svg>
);

export const DropIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 2.7s6 6.3 6 10.3a6 6 0 0 1-12 0c0-4 6-10.3 6-10.3z" />
  </svg>
);

export const ZapIcon = (props: P) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z" />
  </svg>
);

export const BuildingIcon = (props: P) => (
  <svg {...base(props)}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
  </svg>
);

export const ShieldIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />
    <path d="M9 11.5l2 2 4-4" />
  </svg>
);

export const SparkleIcon = (props: P) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M12 2l2.1 5.9L20 10l-5.9 2.1L12 18l-2.1-5.9L4 10l5.9-2.1L12 2z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
  </svg>
);

export const ChatIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const CameraIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const CalendarIcon = (props: P) => (
  <svg {...base(props)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const UserIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const MailIcon = (props: P) => (
  <svg {...base(props)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);

export const CloseIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.2}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const MenuIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.2}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const ChevronDownIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.2}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.2}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const ChevronRightIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2.2}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const ClockIcon = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const BriefcaseIcon = (props: P) => (
  <svg {...base(props)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const LayersIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export const SendIcon = (props: P) => (
  <svg {...base(props)} strokeWidth={2}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export const MicIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <path d="M12 19v3" />
  </svg>
);

export const VolumeIcon = (props: P) => (
  <svg {...base(props)}>
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

export const InfoIcon = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
