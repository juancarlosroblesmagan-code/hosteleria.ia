import { Download, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Contacto</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Impulsa tu negocio <span className="text-primary">hoy mismo</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md text-lg">
              Descubre cómo nuestras herramientas de IA pueden ayudarte a mejorar márgenes y ofrecer una mejor experiencia a tus clientes. Contacta directamente conmigo.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 p-0.5">
                  <img src="/fran_circle.png" alt="Fran Robles Cuesta - CEO" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Fran Robles Cuesta</h4>
                  <p className="text-sm text-primary font-medium">CEO, Hostelería IA</p>
                </div>
              </div>
              
              <div className="flex">
                <a href="/contacto.vcf" download className="inline-flex items-center justify-center rounded-lg text-sm font-bold bg-white/5 border border-white/10 text-white h-11 px-5 hover:bg-white/10 transition-colors gap-2">
                  <Download className="w-4 h-4" />
                  Descargar Contacto
                </a>
              </div>
            </div>
            
            <div className="space-y-5 bg-[#10131A] p-6 rounded-2xl border border-white/5 w-max">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-primary/10 p-2 rounded-full"><Phone className="w-5 h-5 text-primary" /></div>
                <span className="font-medium">+34 711 20 79 32</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-primary/10 p-2 rounded-full"><Mail className="w-5 h-5 text-primary" /></div>
                <span className="font-medium">info.hosteleria.ia@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#10131A] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-8">Solicitar Presupuesto</h3>
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre del Local</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-white/10 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Ej. Restaurante El Celler" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tu Nombre</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-white/10 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full h-12 px-4 rounded-xl bg-background border border-white/10 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@tudominio.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea className="w-full h-28 px-4 py-3 rounded-xl bg-background border border-white/10 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Describe brevemente tus necesidades..."></textarea>
              </div>
              <button type="submit" className="w-full h-14 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors mt-4">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
