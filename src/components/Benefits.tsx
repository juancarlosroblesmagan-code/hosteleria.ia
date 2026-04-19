export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">¿Por qué implementar IA en tu local?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Reducción de Costes</h4>
                  <p className="text-gray-600">Minimiza errores humanos y optimiza el tiempo de tu personal dedicándolo a tareas de verdadero valor.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mejora en la Experiencia</h4>
                  <p className="text-gray-600">Respuestas inmediatas para tus clientes, mejorando la satisfacción general.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="/benefits-analytics.jpg" alt="Beneficios Analytics" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
