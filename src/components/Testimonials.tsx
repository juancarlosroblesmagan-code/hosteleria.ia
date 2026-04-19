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
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Testimonios</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Más de 150 negocios de hostelería ya confían en nosotros para transformar su operación.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonio, idx) => (
            <div key={idx} className="bg-[#10131A] p-8 rounded-2xl border border-white/5 hover:bg-[#151922] transition-colors flex flex-col justify-between">
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonio.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonio.image} alt={testimonio.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="font-semibold text-white">{testimonio.name}</h4>
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
