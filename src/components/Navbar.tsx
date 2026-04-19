export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo-hosteleria-ai.png" alt="HosteleríaAI Logo" className="h-8 md:h-10 object-contain" />
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Beneficios</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonios</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
        </nav>
        <div className="flex gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 px-4 py-2 hover:opacity-90">
            Agenda una llamada
          </a>
        </div>
      </div>
    </header>
  );
}
