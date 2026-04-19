export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Martínez",
      role: "Propietaria, Restaurante El Celler",
      text: "Desde que implantamos el asistente virtual, las llamadas telefónicas en horas punta se redujeron un 60%, y no perdimos ni una reserva.",
      image: "/testimonial-ana.jpg"
    },
    {
      name: "Carlos Ruiz",
      role: "Gerente, Lounge Bar",
      text: "La automatización nos permite estar enfocados en el servicio en sala. HosteleríaAI ha transformado nuestro negocio por completo.",
      image: "/testimonial-carlos.jpg"
    },
    {
      name: "María Gómez",
      role: "Directora de Operaciones",
      text: "El análisis predictivo nos ayuda a reducir desperdicios en nuestra cocina. Una inversión más que amortizada.",
      image: "/testimonial-maria.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">Lo que dicen de nosotros</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonio, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-6">"{testimonio.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonio.image} alt={testimonio.name} className="w-12 h-12 rounded-full object-cover bg-gray-200" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonio.name}</h4>
                  <span className="text-sm text-gray-500">{testimonio.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
