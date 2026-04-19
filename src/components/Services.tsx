import { Download } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Automatización de Reservas",
      description: "Sistemas inteligentes que procesan reservas 24/7 sin intervención humana, optimizando las mesas.",
      image: "/services-restaurant-tech.jpg"
    },
    {
      title: "Chatbots para Atención",
      description: "Atiende preguntas frecuentes, horarios y menú a cualquier hora con inteligencia artificial.",
      image: "/services-bar-tech.jpg"
    },
    {
      title: "Análisis Predictivo",
      description: "Anticípate a la demanda de tu local para optimizar inventarios y turnos de personal."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aplica hoy la tecnología del mañana en tu negocio de hostelería.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              {service.image && (
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
