import { siteConfig } from "@/config/site";

/** Schema.org Event for Google rich results & AI understanding */
export function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: siteConfig.eventName,
    description: siteConfig.description,
    startDate: siteConfig.event.startDate,
    endDate: siteConfig.event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "San Francisco, CA",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/#tickets`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    image: `${siteConfig.url}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
