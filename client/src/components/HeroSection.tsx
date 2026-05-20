import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663674915555/ZfFnXPfUHKEotgPTayuyyM/hero-sanacion-RL9WVQ9My8MFDE8jBguyxz.webp"
          alt="Sanación y cuidado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-3xl mx-auto px-4 text-left">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Tu camino hacia la sanación</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Sanación <span className="text-primary">integral</span> para tu bienestar
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            En ManspiSalud creemos que la verdadera sanación va más allá del tratamiento. Es un viaje de recuperación, confianza y cuidado integral donde tu privacidad y seguridad son nuestra prioridad absoluta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/agendar">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2">
                Comenzar tu sanación
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="rounded-full">
              Conocer más
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Datos 100% encriptados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Privacidad garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Atención personalizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </section>
  );
}
