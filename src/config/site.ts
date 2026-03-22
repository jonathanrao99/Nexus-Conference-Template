/**
 * Central SEO / branding config. Override NEXT_PUBLIC_SITE_URL when you use your own domain.
 */
export const siteConfig = {
  name: "ForumX",
  eventName: "ForumX Summit 2027",
  titleTemplate: "%s | ForumX Summit 2027",
  defaultTitle: "ForumX Summit 2027 — Conference Website Template",
  description:
    "ForumX Summit 2027 — three days of keynotes, workshops, and networking for leaders in technology, strategy, and innovation. June 12–14, 2027 · San Francisco, CA.",
  /** Canonical site origin — no trailing slash */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://forumx-conference-template.vercel.app",
  locale: "en_US",
  keywords: [
    "ForumX",
    "ForumX Summit",
    "conference",
    "summit",
    "technology",
    "San Francisco",
    "2027",
    "keynotes",
    "networking",
  ],
  twitter: {
    site: "@forumx",
    creator: "@forumx",
  },
  /** Geo hints for search & rich results */
  geo: {
    region: "US-CA",
    placename: "San Francisco",
    /** ICBM: latitude, longitude */
    icbm: "37.7749, -122.4194",
  },
  event: {
    startDate: "2027-06-12T09:00:00-07:00",
    endDate: "2027-06-14T18:00:00-07:00",
    timeZone: "America/Los_Angeles",
  },
} as const;
