import { Card } from "@/components/ui/card";
import { Leaf, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cuidado Humano",
    description: "Cada paciente es único. Ofrecemos atención personalizada que respeta tu individualidad y necesidades específicas.",
  },
  {
    icon: Leaf,
    title: "Sanación Integral",
    description: "No solo tratamos síntomas. Buscamos sanar la raíz del problema para tu recuperación completa y duradera.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Médica",
    description: "Utilizamos las tecnologías y métodos más avanzados en medicina para garantizar los mejores resultados.",
  },
];

const testimonials = [
  {
    name: "María González",
    role: "Paciente",
    text: "Desde el primer día sentí que estaba en manos seguras. La privacidad de mis datos y la calidad del cuidado fueron excepcionales.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Paciente",
    text: "ManspiSalud cambió mi vida. No solo me curaron, sino que me enseñaron a cuidarme. Recomiendo este hospital a todos.",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Paciente",
    text: "La experiencia de sanación aquí es diferente. Sientes que realmente se preocupan por tu bienestar integral.",
    avatar: "AM",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container">
        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <p className="text-lg text-foreground/60">Principios que guían cada acción en ManspiSalud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors"></div>
                  <div className="relative p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Lo que dicen nuestros <span className="text-primary">pacientes</span>
            </h2>
            <p className="text-lg text-foreground/60">Historias reales de sanación y recuperación</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl hover:-translate-y-1"
              >
                <div className="p-8 space-y-4">
                  {/* Quote */}
                  <p className="text-lg text-foreground/70 italic leading-relaxed">
                    {'"' + testimonial.text + '"'}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
