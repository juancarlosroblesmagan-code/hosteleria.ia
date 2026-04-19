import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo-hosteleria-ai.png" alt="HosteleríaAI Logo" className="h-8 md:h-10 object-contain" />
        </a>
        
        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-8 lg:gap-10">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Servicios</a>
          <a href="#benefits" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Beneficios</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonios</a>
          <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contacto</a>
        </nav>
        
        {/* Right: CTA & User Icon */}
        <div className="flex gap-4 items-center">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground h-10 px-5 py-2 hover:bg-primary/90 transition-opacity">
            Solicitar Demo
          </a>
          <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <UserCircle className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
