export default function Footer() {
  return (
    <footer className="bg-[#0A0D14] text-gray-400 border-t border-white/5 py-16">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="mb-6 flex items-center space-x-3">
             <img src="/logo-hosteleria-ai.png" alt="HosteleríaAI Logo" className="h-8 object-contain" />
             <span className="text-2xl font-bold tracking-tight text-white font-display pt-1">Hostelería<span className="text-primary">IA</span></span>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            Liderando la revolución de la inteligencia artificial para el sector de la hostelería en España y Latinoamérica. Transformamos tu forma de trabajar.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">ENLACES</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#benefits" className="hover:text-primary transition-colors">Beneficios</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonios</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">LEGAL</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
        <p>© {new Date().getFullYear()} HosteleríaIA. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <span>Diseñado y optimizado para la Hostelería</span>
        </div>
      </div>
    </footer>
  );
}
