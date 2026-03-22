"use client";

import { Analytics } from "@vercel/analytics/react";

/** Vercel Web Analytics — only sends data when deployed on Vercel. */
export function VercelAnalytics() {
  return <Analytics />;
}
