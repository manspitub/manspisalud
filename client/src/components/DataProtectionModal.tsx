import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, BookOpen, AlertCircle, CheckCircle2 } from "lucide-react";

interface DataProtectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DataProtectionModal({ open, onOpenChange }: DataProtectionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-primary" />
            <DialogTitle className="text-2xl">Protección de Datos y Privacidad en IA</DialogTitle>
          </div>
          <DialogDescription>
            Normativa y regulaciones que protegen tu información en ManspiSalud
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-150px)] pr-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="gdpr">GDPR</TabsTrigger>
              <TabsTrigger value="hipaa">HIPAA</TabsTrigger>
              <TabsTrigger value="ia">IA & Datos</TabsTrigger>
            </TabsList>

            {/* Resumen General */}
            <TabsContent value="overview" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">¿Por qué es importante la protección de datos?</h3>
                <p className="text-foreground/70 leading-relaxed">
                  En ManspiSalud, tu información de salud es uno de los datos más sensibles y personales que existen. La protección de estos datos no es solo una obligación legal, sino un compromiso ético fundamental con tu privacidad y seguridad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Derecho a la Privacidad",
                      description: "Tu información médica es confidencial y no puede ser compartida sin tu consentimiento explícito.",
                      icon: Shield,
                    },
                    {
                      title: "Control de Datos",
                      description: "Tienes derecho a acceder, modificar y eliminar tus datos personales en cualquier momento.",
                      icon: CheckCircle2,
                    },
                    {
                      title: "Transparencia",
                      description: "Debes saber exactamente qué datos tenemos, cómo los usamos y quién tiene acceso a ellos.",
                      icon: BookOpen,
                    },
                    {
                      title: "Seguridad",
                      description: "Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados.",
                      icon: AlertCircle,
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-accent/10 border border-accent/20 space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                        </div>
                        <p className="text-sm text-foreground/60">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* GDPR */}
            <TabsContent value="gdpr" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">GDPR - Reglamento General de Protección de Datos</h3>
                <p className="text-foreground/70 leading-relaxed">
                  El GDPR es la regulación de la Unión Europea que establece los estándares más altos de protección de datos personales a nivel mundial. ManspiSalud cumple completamente con todas sus disposiciones.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Derechos GDPR que te protegen:</h4>
                    <ul className="space-y-2">
                      {[
                        "Derecho de acceso: Puedes solicitar una copia de todos tus datos personales",
                        "Derecho al olvido: Puedes solicitar la eliminación de tus datos",
                        "Derecho a la rectificación: Puedes corregir datos inexactos",
                        "Derecho a la portabilidad: Puedes obtener tus datos en formato legible",
                        "Derecho a oponerme: Puedes rechazar ciertos usos de tus datos",
                        "Derecho a no ser objeto de decisiones automatizadas: No podemos tomar decisiones solo basadas en IA sin intervención humana",
                      ].map((right, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{right}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Consentimiento en ManspiSalud:</h4>
                    <p className="text-sm text-foreground/70">
                      Bajo GDPR, tu consentimiento debe ser explícito, informado y revocable. Nunca procesamos tus datos médicos sin tu aprobación clara. Puedes cambiar de opinión en cualquier momento.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* HIPAA */}
            <TabsContent value="hipaa" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">HIPAA - Ley de Portabilidad y Responsabilidad de Seguros Médicos</h3>
                <p className="text-foreground/70 leading-relaxed">
                  HIPAA es la regulación estadounidense que protege la privacidad de la información médica. ManspiSalud implementa todos los estándares de seguridad y privacidad requeridos por HIPAA.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Pilares de HIPAA en ManspiSalud:</h4>
                    <ul className="space-y-2">
                      {[
                        "Privacidad: Control sobre quién accede a tu información médica",
                        "Seguridad: Protección física, técnica y administrativa de datos",
                        "Notificación: Te informamos inmediatamente si hay una violación de datos",
                        "Cumplimiento: Auditorías regulares y certificaciones actualizadas",
                      ].map((pillar, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Encriptación HIPAA:</h4>
                    <p className="text-sm text-foreground/70">
                      Todos los datos médicos se encriptan con AES-256 en tránsito y en reposo. Esto significa que incluso si alguien interceptara tus datos, serían completamente ilegibles sin la clave de encriptación.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* IA y Datos */}
            <TabsContent value="ia" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Inteligencia Artificial y Protección de Datos</h3>
                <p className="text-foreground/70 leading-relaxed">
                  La IA en medicina es poderosa, pero requiere protecciones especiales. ManspiSalud utiliza IA de forma ética y responsable, siempre priorizando tu privacidad.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Cómo usamos IA responsablemente:</h4>
                    <ul className="space-y-2">
                      {[
                        "Anonimización: Removemos identificadores personales antes de entrenar modelos",
                        "Consentimiento específico: Te pedimos permiso explícito para usar tus datos en IA",
                        "Transparencia: Te explicamos cómo la IA influye en tu diagnóstico o tratamiento",
                        "Intervención humana: Un médico siempre revisa las recomendaciones de IA",
                        "Sesgo mitigado: Auditamos regularmente nuestros modelos para evitar discriminación",
                      ].map((use, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/20 space-y-3">
                    <h4 className="font-semibold text-foreground">Regulaciones de IA que seguimos:</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      Cumplimos con la Ley de IA de la UE y otros marcos regulatorios emergentes:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "AI Act (UE): Evaluación de riesgos y transparencia en sistemas de IA",
                        "Principios de IA ética: Equidad, responsabilidad, transparencia y seguridad",
                        "Regulaciones de datos biométricos: Protección especial para datos de salud",
                        "Derechos algorítmicos: Derecho a explicación y a no ser discriminado por IA",
                      ].map((reg, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-accent" />
                      Garantía de ManspiSalud
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Nunca vendemos tus datos a empresas de IA. Nunca entrenamos modelos con tus información médica sin tu consentimiento explícito. Tu privacidad es más importante que cualquier ganancia comercial.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="mt-8 p-4 rounded-2xl bg-foreground/5 border border-border space-y-3">
            <h4 className="font-semibold text-foreground">¿Preguntas sobre tus datos?</h4>
            <p className="text-sm text-foreground/70">
              Si tienes preguntas sobre cómo manejamos tus datos o deseas ejercer tus derechos, contacta a nuestro Oficial de Protección de Datos en{" "}
              <a href="mailto:privacy@manspisalud.com" className="text-primary hover:underline">
                privacy@manspisalud.com
              </a>
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
