import Head from "next/head";

function CustomHead() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Service",
    name: "David",
    image: "https://portfolio-david38.vercel.app/LogoWabi.png",
    url: "https://portfolio-david38.vercel.app/",
    description:
      "Services de développement web spécialisés dans la création de sites réactifs et performants.",
    provider: {
      "@type": "Person",
      name: "David",
    },
    serviceOutput: "Site web responsive performant",
    areaServed: "France",
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Portfolio de David</title>
      <meta
        name="description"
        content="Portfolio David - Développeur Fullstack Junior"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="David - Développeur Web Fullstack" />
      <meta
        name="twitter:description"
        content="Développeur web pour vos créations, refontes ou améliorations de site web"
      />
      <meta
        name="twitter:image"
        content="https://portfolio-david38.vercel.app/LogoWabi.webp"
      />

      {/* OpenGraph */}
      <meta property="og:title" content="David, Développeur web Fullstack" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://portfolio-david38.vercel.app/LogoWabi.webp"
      />
      <meta property="og:url" content="https://portfolio-david38.vercel.app/" />
      <meta
        property="og:description"
        content="Développeur web pour vos créations, refontes ou améliorations de site web"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}

export default CustomHead;
