import AppointmentForm from "@/components/AppointmentForm";
import { Heart, Shield, Clock } from "lucide-react";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Header Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Tu Camino hacia la <span className="text-primary">Sanación</span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Agenda tu cita médica en ManspiSalud y comienza tu viaje de recuperación. Nuestros especialistas están listos para brindarte la mejor atención.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-border/50 text-center space-y-3 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Atención Personalizada</h3>
              <p className="text-sm text-foreground/60">Cada cita es diseñada según tus necesidades específicas</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-border/50 text-center space-y-3 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Disponibilidad Flexible</h3>
              <p className="text-sm text-foreground/60">Horarios adaptados a tu agenda</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-border/50 text-center space-y-3 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Privacidad Garantizada</h3>
              <p className="text-sm text-foreground/60">Tus datos están 100% protegidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <AppointmentForm />
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-primary/5 border-t border-border/50 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-sm text-foreground/60 mb-2">Confirmación</p>
              <p className="font-semibold text-foreground">Instantánea por Email</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-2">Recordatorio</p>
              <p className="font-semibold text-foreground">24 Horas Antes</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-2">Soporte</p>
              <p className="font-semibold text-foreground">24/7 Disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
