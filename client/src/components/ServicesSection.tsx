import { Card } from "@/components/ui/card";
import { Activity, Heart, Shield, Pill, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Consulta General",
    description: "Atención médica integral con enfoque preventivo y curativo.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Activity,
    title: "Medicina Preventiva",
    description: "Programas de bienestar y prevención de enfermedades.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Pill,
    title: "Farmacoterapia",
    description: "Tratamientos farmacológicos personalizados y seguros.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Seguimiento",
    description: "Monitoreo continuo de tu recuperación y progreso.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Terapia Integral",
    description: "Apoyo psicológico y emocional durante tu sanación.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Urgencias",
    description: "Atención inmediata disponible 24/7 para emergencias.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Servicios de <span className="text-primary">Sanación</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Ofrecemos una gama completa de servicios médicos diseñados para tu recuperación y bienestar integral.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl hover:-translate-y-1"
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-50`}></div>

                {/* Content */}
                <div className="relative p-8 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>

                  {/* Hover Effect Line */}
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-12 transition-all duration-300 rounded-full mt-4"></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
