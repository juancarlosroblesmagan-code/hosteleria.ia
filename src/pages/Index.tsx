import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SITE_URL = "https://hosteleriaia.com";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>HosteleríaAI - Automatización e IA para restaurantes, bares y cafeterías</title>
        <meta 
          name="description" 
          content="Transforma tu negocio de hostelería con inteligencia artificial. Automatiza reservas, mejora la atención al cliente y optimiza operaciones con HosteleríaAI." 
        />
        <link rel="canonical" href={SITE_URL} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HosteleríaAI - IA y automatización para hostelería" />
        <meta 
          property="og:description" 
          content="Transforma tu restaurante, bar o cafetería con soluciones de inteligencia artificial. Automatiza reservas y mejora la experiencia del cliente." 
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="HosteleríaAI" />
        <meta property="og:image" content={`${SITE_URL}/og-home.jpg`} />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HosteleríaAI - IA para hostelería" />
        <meta 
          name="twitter:description" 
          content="Transforma tu negocio de hostelería con inteligencia artificial y automatización." 
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-home.jpg`} />
        
        {/* Additional SEO */}
        <meta name="keywords" content="IA hostelería, automatización restaurantes, chatbot restaurante, reservas automáticas, inteligencia artificial bares, gestión hostelería" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="HosteleríaAI" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HosteleríaAI",
            "url": SITE_URL,
            "logo": `${SITE_URL}/favicon.png`,
            "description": "Agencia especializada en automatización e inteligencia artificial para el sector de la hostelería.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ES"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "hola@hosteleriaia.com"
            },
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HosteleríaAI",
            "url": SITE_URL,
            "description": "Automatización e inteligencia artificial para restaurantes, bares y cafeterías.",
            "publisher": {
              "@type": "Organization",
              "name": "HosteleríaAI"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HosteleríaAI",
            "description": "Agencia de IA especializada en el sector hostelero. Ofrecemos chatbots, automatización de reservas y soluciones de inteligencia artificial para restaurantes, bares y cafeterías.",
            "url": SITE_URL,
            "priceRange": "$$",
            "serviceType": ["Automatización", "Inteligencia Artificial", "Chatbots", "Consultoría tecnológica"],
            "areaServed": {
              "@type": "Country",
              "name": "España"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
