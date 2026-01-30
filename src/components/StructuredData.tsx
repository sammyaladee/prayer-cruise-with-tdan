export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prayer Cruise with TDAN",
    "description": "Raising Intentional Believers through Prayer, Fasting & God's Word",
    "url": "https://prayercruisewithtdan.org",
    "logo": "https://prayercruisewithtdan.org/logo.png",
    "foundingDate": "2026", 
    "sameAs": [
      "https://facebook.com/tobid3",
      "https://www.tiktok.com/@prayercruisewithtdan",
      "https://www.instagram.com/prayercruisewithtdan/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Support",
      "email": "info@prayercruisewithtdan.org"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}