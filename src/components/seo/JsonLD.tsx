const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Logo Adult",
  image: "https://logoadult.by/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Грюнвальдская улица, 12А",
    addressLocality: "Брест",
    addressRegion: "Брестская область",
    postalCode: "224003",
    addressCountry: "BY",
  },
  telephone: "+375445931003",
  url: "https://www.logoadult.by",
  sameAs: [
    "https://www.instagram.com/logo_adult/",
    "https://www.linkedin.com/in/майя-бабанова-b1b788376/",
    "https://vk.com/logo_adult/",
  ],
  openingHours: "Mo-Su 09:00-23:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.06471",
    longitude: "23.70545",
  },
};

export default function JsonLD() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
