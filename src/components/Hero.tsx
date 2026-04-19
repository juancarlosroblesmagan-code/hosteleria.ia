export default function Hero() {
  return (
    <section className="relative pt-16 pb-32 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <img src="/hero-restaurant.jpg" alt="Restaurante" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Inteligencia Artificial para <span className="text-amber-400">Hostelería</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
          Transformamos restaurantes, cafeterías y bares con soluciones de inteligencia artificial. Chatbots, gestión de reservas, análisis predictivo y automatización total.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md text-base font-medium bg-amber-500 text-gray-900 h-12 px-8 py-3 hover:bg-amber-400 transition-colors">
            Descubre cómo funciona
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-md text-base font-medium bg-transparent border border-white/30 text-white h-12 px-8 py-3 hover:bg-white/10 transition-colors">
            Ver servicios
          </a>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl mt-8">
          <img src="/hero-qr.png" alt="Reservas QR" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
