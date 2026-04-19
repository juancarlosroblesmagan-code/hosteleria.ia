export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container px-4 max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="mb-4">
            <span className="text-2xl font-bold text-white tracking-tighter">Hostelería<span className="text-amber-500">IA</span></span>
          </div>
          <p className="max-w-xs text-sm text-gray-400">
            Liderando la revolución de la inteligencia artificial para el sector de la hostelería en España y Latinoamérica.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-amber-500 transition-colors">Servicios</a></li>
            <li><a href="#benefits" className="hover:text-amber-500 transition-colors">Beneficios</a></li>
            <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonios</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="container px-4 max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} HosteleríaIA. Todos los derechos reservados.
      </div>
    </footer>
  );
}
