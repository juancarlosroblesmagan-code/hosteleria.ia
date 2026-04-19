import { CheckCircle2, TrendingUp, Clock, Users, ShieldCheck } from "lucide-react";

export default function Benefits() {
  const kpis = [
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "+25%",
      subtitle: "Aumenta tus ingresos",
      desc: "Incremento medio del 25% en reservas y pedidos gracias a la disponibilidad 24/7."
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "15h/semana",
      subtitle: "Ahorra tiempo",
      desc: "Reduce hasta 15 horas semanales en tareas administrativas repetitivas."
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "98% satisfacción",
      subtitle: "Mejora la experiencia",
      desc: "Atención personalizada y rápida que fideliza a tus clientes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "0 riesgo",
      subtitle: "Sin riesgo",
      desc: "Implementación gradual y soporte continuo para garantizar el éxito."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
        
        {/* Top Image Hero inside Benefits */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] mb-24 flex items-center shadow-2xl">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <img src="/benefits-analytics.jpg" alt="Beneficios Hostelería" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-20 max-w-xl pl-8 md:pl-16">
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Por qué elegirnos</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Resultados que <br/><span className="text-primary">transforman</span>
            </h2>
            <p className="text-gray-300 text-lg">
              No solo implementamos tecnología, creamos soluciones que generan resultados tangibles para tu negocio desde el primer día.
            </p>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-white mb-10">Todo lo que necesitas para crecer</h2>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                "Integración con tu sistema actual",
                "Sin necesidad de conocimientos técnicos",
                "Resultados desde el primer mes",
                "Personalización completa",
                "Soporte en español 24/7",
                "Actualizaciones continuas"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="bg-[#10131A] border border-white/5 rounded-2xl p-8 hover:bg-[#151922] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                  {kpi.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{kpi.title}</h3>
                <h4 className="text-lg font-bold text-white mb-3">{kpi.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
