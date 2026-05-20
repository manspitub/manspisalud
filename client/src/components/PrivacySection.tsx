import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Lock, Eye, Database, Shield, Zap, CheckCircle2 } from "lucide-react";
import DataProtectionModal from "./DataProtectionModal";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encriptación de Datos",
    description: "Todos tus datos médicos están protegidos con encriptación de grado militar (AES-256).",
  },
  {
    icon: Eye,
    title: "Privacidad Total",
    description: "Tu información nunca será compartida sin tu consentimiento explícito.",
  },
  {
    icon: Database,
    title: "Almacenamiento Seguro",
    description: "Servidores certificados con cumplimiento HIPAA y GDPR.",
  },
  {
    icon: Shield,
    title: "Protección Continua",
    description: "Monitoreo 24/7 de amenazas y vulnerabilidades de seguridad.",
  },
  {
    icon: Zap,
    title: "Acceso Controlado",
    description: "Autenticación de dos factores y control granular de permisos.",
  },
  {
    icon: CheckCircle2,
    title: "Auditorías Regulares",
    description: "Revisiones de seguridad independientes y certificaciones actualizadas.",
  },
];

const guarantees = [
  "Tu información médica nunca será vendida ni compartida con terceros sin tu consentimiento",
  "Todos los datos están encriptados en tránsito y en reposo",
  "Puedes acceder, modificar o eliminar tus datos en cualquier momento",
  "Realizamos auditorías de seguridad independientes cada trimestre",
  "Cumplimos con HIPAA, GDPR y todas las regulaciones de privacidad de datos",
];

export default function PrivacySection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="privacidad" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with Shield Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663674915555/ZfFnXPfUHKEotgPTayuyyM/privacy-security-shield-2Vpuf9Y2s7iGDfDnVpjD8v.webp"
          alt="Seguridad de datos"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-4 cursor-pointer hover:bg-primary/30 hover:border-primary/60 transition-all duration-300"
          >
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tu <span className="text-primary">Privacidad</span> es Sagrada
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            En ManspiSalud, entendemos que tu información de salud es profundamente personal. Por eso, hemos implementado los más altos estándares de seguridad y privacidad para proteger tus datos sensibles.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-block mt-4 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Ver normativa completa de protección de datos →
          </button>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onClick={() => setModalOpen(true)}
                className="group relative p-8 rounded-3xl border border-border/50 bg-white/50 backdrop-blur hover:bg-white/80 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                <p className="text-xs text-primary mt-3 font-semibold">Haz clic para más detalles →</p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">256-bit</div>
            <p className="text-sm text-foreground/60">Encriptación AES</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <p className="text-sm text-foreground/60">Monitoreo de Seguridad</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-foreground/60">Cumplimiento HIPAA</p>
          </div>
        </div>

        {/* Guarantee Card */}
        <div
          onClick={() => setModalOpen(true)}
          className="mt-12 relative p-8 md:p-12 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Nuestra Garantía de Privacidad</h3>
            <p className="text-sm text-primary hover:text-primary/80 transition-colors">
              Haz clic para conocer la normativa completa de protección de datos y IA →
            </p>
            <ul className="space-y-3" onClick={(e) => e.stopPropagation()}>
              {guarantees.map((guarantee, idx) => (
                <li key={idx} className="flex items-start gap-3" onClick={(e) => e.stopPropagation()}>
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{guarantee}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <DataProtectionModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
