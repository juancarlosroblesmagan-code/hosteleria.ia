import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 flex flex-col items-center overflow-hidden min-h-[90vh]">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95 lg:bg-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img src="/hero-restaurant.jpg" alt="Restaurante Fondo" className="w-full h-full object-cover object-right opacity-60" />
      </div>
      
      <div className="container relative z-20 flex flex-col justify-center px-4 lg:px-8 max-w-7xl mx-auto flex-1">
        
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-8">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Especialistas en hostelería</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-8 leading-[1.1] text-white">
            Automatiza tu <br />
            <span className="text-primary">restaurante</span> con IA
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Transformamos la operación de restaurantes, cafeterías y bares con soluciones de inteligencia artificial que aumentan la eficiencia, reducen costes y mejoran la experiencia del cliente.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg text-base font-bold bg-primary text-primary-foreground h-14 px-8 hover:bg-primary/90 transition-colors gap-2">
              Solicitar Demo Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg text-base font-bold bg-transparent border border-white/20 text-white h-14 px-8 hover:bg-white/5 transition-colors">
              Ver Servicios
            </a>
          </div>
          
          {/* KPI Line */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg">
            <div>
              <p className="text-3xl font-bold text-primary mb-1">150+</p>
              <p className="text-xs text-gray-500 uppercase font-medium tracking-wider">Negocios automatizados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">40%</p>
              <p className="text-xs text-gray-500 uppercase font-medium tracking-wider">Ahorro en costes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">24/7</p>
              <p className="text-xs text-gray-500 uppercase font-medium tracking-wider">Soporte activo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
