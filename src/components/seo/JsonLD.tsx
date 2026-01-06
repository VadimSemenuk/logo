const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.logoadult.by/#business",
      name: "Logo Adult - Логопед для взрослых",
      image: "https://www.logoadult.by/img/main.webp",
      url: "https://wwww.logoadult.by/",
      email: "babanovamaya@yandex.by",
      telephone: "+375445931003",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Грюнвальдская улица, 12А",
        addressLocality: "Брест",
        addressRegion: "Брестская область",
        postalCode: "224003",
        addressCountry: "BY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.06471,
        longitude: 23.70545,
      },
      openingHours: "Mo-Su 09:00-23:00",
      sameAs: [
        "https://www.instagram.com/logo_adult/",
        "https://vk.com/logo_adult/",
        "https://www.linkedin.com/in/maya-babanova/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.logoadult.by/#person",
      name: "Майя Бабанова",
      jobTitle: "Логопед",
      worksFor: {
        "@id": "https://www.logoadult.by/#business",
      },
      url: "https://www.logoadult.by",
      knowsAbout: [
        "логопедия",
        "постановка и коррекция звуков",
        "коррекция заикания",
        "восстановление речи после инсульта и черепно-мозговой травмы",
        "логопедический массаж",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Брестский государственный университет имени А.С.Пушкина",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Высшее образование",
        competencyRequired: "Логопедия",
        name: 'Диплом о высшем образовании с отличием по специальности "Логопедия"',
        recognizedBy: {
          "@type": "Organization",
          name: "Брестский государственный университет имени А.С.Пушкина",
        },
      },
      sameAs: ["https://www.instagram.com/maya_like_may/"],
    },
    {
      "@type": "Service",
      "@id": "https://www.logoadult.by/#service-logoped",
      serviceType: "Логопед",
      provider: {
        "@id": "https://www.logoadult.by/#business",
      },
      areaServed: {
        "@type": "City",
        name: "Брест",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Логопедические услуги",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Постановка и коррекция звуков",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Восстановление утраченных речевых навыков после инсульта или черепно-мозговой травмы",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Коррекция заикания",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ускоренная/замедленная речь",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Логопедический массаж",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "С какими нарушениями Вы работаете?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Постановка и коррекция звуков, коррекция заикания, восстановление речи после инсульта и черепно-мозговой травмы, логопедический массаж.",
          },
        },
        {
          "@type": "Question",
          name: "В каком формате проходит занятие?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Занятия проходят как онлайн так и очно в городе бресте.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли поставить звук во взрослом возрасте?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, можно! Это может занять немного больше времени ввиду необходимости перестройки упрочнившихся речевых стереотипов, но вполне реально.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько времени займет коррекция звукопроизношения?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "От нескольких месяцев до года. Сроки очень индивидуальны, весь процесс может занять как меньше времени, так и больше.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько занятий в неделю необходимо?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Стандартный вариант - 2 занятия в неделю. В зависимости от Ваших потребностей и возможностей, может быть 1 занятие в неделю, а может быть 3-4 и более.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://wwww.logoadult.by/#website",
      url: "https://wwww.logoadult.by/",
      name: "Логопед для взрослых онлайн и очно в городе Бресте",
      description:
        "Индивидуальные занятия с логопедом. Постановка и коррекция звуков, коррекция заикания, восстановление речи после инсульта и черепно-мозговой травмы, логопедический массаж",
      publisher: {
        "@id": "https://www.logoadult.by/#business",
      },
      inLanguage: "ru-RU",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.logoadult.by/#webpage",
      url: "https://www.logoadult.by/",
      name: "Логопед для взрослых онлайн и очно в городе Бресте",
      description:
        "Индивидуальные занятия с логопедом. Постановка и коррекция звуков, коррекция заикания, восстановление речи после инсульта и черепно-мозговой травмы, логопедический массаж",
      inLanguage: "ru",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://wwww.logoadult.by/#website",
        name: "Logo Adult",
        url: "https://www.logoadult.by/",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://logoadult.by/logo.png",
      },
    },
  ],
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
