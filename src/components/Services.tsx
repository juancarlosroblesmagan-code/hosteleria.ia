import { Bot, CalendarDays, BarChart3, MessageSquareText, UtensilsCrossed, BellRing } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Chatbots Inteligentes",
      description: "Asistentes virtuales 24/7 para resolver dudas, tomar reservas y gestionar pedidos a través de WhatsApp, web y redes sociales.",
      icon: <Bot className="w-6 h-6 text-primary" />
    },
    {
      title: "Gestión de Reservas",
      description: "Sistema automatizado que optimiza la ocupación de mesas, reduce no-shows y mejora la experiencia de reserva.",
      icon: <CalendarDays className="w-6 h-6 text-primary" />
    },
    {
      title: "Análisis Predictivo",
      description: "Predicción de demanda, gestión de inventario inteligente y optimización de compras basada en datos históricos.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: "Atención Automatizada",
      description: "Respuestas automáticas a reseñas, gestión de redes sociales y comunicación personalizada con clientes.",
      icon: <MessageSquareText className="w-6 h-6 text-primary" />
    },
    {
      title: "Menús Dinámicos",
      description: "Recomendaciones personalizadas, precios dinámicos y sugerencias basadas en preferencias del cliente.",
      icon: <UtensilsCrossed className="w-6 h-6 text-primary" />
    },
    {
      title: "Notificaciones Smart",
      description: "Alertas automáticas para el equipo, recordatorios a clientes y gestión de turnos optimizada.",
      icon: <BellRing className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Nuestros Servicios</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Soluciones de <span className="text-white">IA para hostelería</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Automatizamos cada aspecto de tu negocio para que puedas centrarte en lo que realmente importa: tus clientes.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full hidden lg:block">
            {/* Image Composition */}
            <img src="/services-restaurant-tech.jpg" alt="IA Restaurant" className="absolute left-0 bottom-0 w-2/3 h-5/6 object-cover rounded-2xl shadow-xl border border-white/5 z-20" />
            <img src="/services-bar-tech.jpg" alt="IA Bar" className="absolute right-0 top-0 w-3/4 h-3/4 object-cover rounded-2xl shadow-xl border border-white/5 z-10" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#10131A] border border-white/5 rounded-2xl p-8 hover:bg-[#151922] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
