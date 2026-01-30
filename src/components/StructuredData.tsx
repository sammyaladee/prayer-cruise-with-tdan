export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prayer Cruise with TDAN",
    "description": "Raising Intentional Believers through Prayer, Fasting & God's Word",
    "url": "https://yourwebsite.com",
    "logo": "https://yourwebsite.com/logo.png",
    "foundingDate": "2020", // Update with your actual founding year
    "sameAs": [
      "https://facebook.com/yourpage",
      "https://twitter.com/yourhandle",
      "https://instagram.com/yourhandle"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@yourwebsite.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}