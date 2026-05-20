import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 fill-secondary" />
              <h3 className="text-xl font-bold">ManspiSalud</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Tu bienestar es nuestro cuidado. Sanación integral con privacidad garantizada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#privacidad" className="text-background/70 hover:text-background transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@manspisalud.com">info@manspisalud.com</a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Calle Principal 123, Ciudad, País</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2026 ManspiSalud. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
