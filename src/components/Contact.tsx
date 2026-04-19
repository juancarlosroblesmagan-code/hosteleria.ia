import { Download, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Impulsa tu negocio hoy mismo</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Descubre cómo nuestras herramientas de IA pueden ayudarte a mejorar márgenes y ofrecer una mejor experiencia a tus clientes. Contacta directamente conmigo.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm border-2 border-amber-100">
                  <img src="/fran_circle.png" alt="Fran Robles Cuesta - CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fran Robles Cuesta</h4>
                  <p className="text-sm text-gray-500">CEO, Hostelería IA</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <a href="/contacto.vcf" download className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-amber-500 text-gray-900 h-10 px-4 py-2 hover:bg-amber-400 transition-colors gap-2">
                  <Download className="w-4 h-4" />
                  Descargar Contacto
                </a>
              </div>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>+34 711 20 79 32</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>info.hosteleria.ia@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Solicitar Presupuesto</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre del Local</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Ej. Restaurante El Celler" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tu Nombre</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="email@tudominio.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Cómo podemos ayudarte?</label>
                <textarea className="w-full h-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Describe brevemente tus necesidades..."></textarea>
              </div>
              <button type="submit" className="w-full h-12 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
