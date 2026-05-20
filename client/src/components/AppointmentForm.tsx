import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, Calendar, Clock, User, Phone, Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const medicalSpecialties = [
  { value: "general", label: "Consulta General" },
  { value: "preventive", label: "Medicina Preventiva" },
  { value: "pharmacy", label: "Farmacoterapia" },
  { value: "therapy", label: "Terapia Integral" },
  { value: "emergency", label: "Urgencias" },
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    specialty: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    medicalHistory: "",
    allergies: "",
    medications: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "El nombre completo es requerido";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Email inválido";
    if (!formData.phone.match(/^\+?[\d\s\-()]{10,}$/)) newErrors.phone = "Teléfono inválido";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "La fecha de nacimiento es requerida";
    if (!formData.specialty) newErrors.specialty = "Selecciona una especialidad";
    if (!formData.appointmentDate) newErrors.appointmentDate = "Selecciona una fecha";
    if (!formData.appointmentTime) newErrors.appointmentTime = "Selecciona una hora";
    if (!formData.symptoms.trim()) newErrors.symptoms = "Describe tus síntomas";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSuccess(true);
      toast.success("Cita agendada exitosamente. Recibirás una confirmación por email.");

      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          specialty: "",
          appointmentDate: "",
          appointmentTime: "",
          symptoms: "",
          medicalHistory: "",
          allergies: "",
          medications: "",
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error("Error al agendar la cita. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-96 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <CheckCircle2 className="w-20 h-20 text-accent absolute inset-0 animate-in zoom-in duration-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground">¡Cita Confirmada!</h3>
          <p className="text-foreground/60 max-w-sm">
            Tu cita ha sido agendada exitosamente. Recibirás un email de confirmación con todos los detalles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl font-bold text-foreground">Agendar Cita</h2>
          </div>
          <p className="text-foreground/60">Completa el formulario para reservar tu consulta médica</p>
        </div>

        {/* Personal Information Section */}
        <Card className="p-6 border-border/50 bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Información Personal
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Nombre Completo *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Juan Pérez García"
                className={`mt-2 ${errors.fullName ? "border-destructive" : ""}`}
              />
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.fullName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                  className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="text-foreground font-medium">
                Fecha de Nacimiento *
              </Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`mt-2 ${errors.dateOfBirth ? "border-destructive" : ""}`}
              />
              {errors.dateOfBirth && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.dateOfBirth}
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Appointment Details Section */}
        <Card className="p-6 border-border/50 bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Detalles de la Cita
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="specialty" className="text-foreground font-medium">
                Especialidad *
              </Label>
              <Select value={formData.specialty} onValueChange={(value) => handleSelectChange("specialty", value)}>
                <SelectTrigger className={`mt-2 ${errors.specialty ? "border-destructive" : ""}`}>
                  <SelectValue placeholder="Selecciona una especialidad" />
                </SelectTrigger>
                <SelectContent>
                  {medicalSpecialties.map(specialty => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.specialty && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.specialty}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="appointmentDate" className="text-foreground font-medium">
                  Fecha de la Cita *
                </Label>
                <Input
                  id="appointmentDate"
                  name="appointmentDate"
                  type="date"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`mt-2 ${errors.appointmentDate ? "border-destructive" : ""}`}
                />
                {errors.appointmentDate && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.appointmentDate}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="appointmentTime" className="text-foreground font-medium">
                  Hora de la Cita *
                </Label>
                <Select value={formData.appointmentTime} onValueChange={(value) => handleSelectChange("appointmentTime", value)}>
                  <SelectTrigger className={`mt-2 ${errors.appointmentTime ? "border-destructive" : ""}`}>
                    <SelectValue placeholder="Selecciona una hora" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>
                        <Clock className="w-4 h-4 inline mr-2" />
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.appointmentTime && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.appointmentTime}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Medical Information Section */}
        <Card className="p-6 border-border/50 bg-white/50 backdrop-blur">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Información Médica
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="symptoms" className="text-foreground font-medium">
                Síntomas o Motivo de la Consulta *
              </Label>
              <Textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="Describe los síntomas que has experimentado..."
                className={`mt-2 min-h-24 ${errors.symptoms ? "border-destructive" : ""}`}
              />
              {errors.symptoms && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.symptoms}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="medicalHistory" className="text-foreground font-medium">
                Antecedentes Médicos
              </Label>
              <Textarea
                id="medicalHistory"
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                placeholder="Enfermedades previas, cirugías, etc."
                className="mt-2 min-h-20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="allergies" className="text-foreground font-medium">
                  Alergias
                </Label>
                <Input
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="Alergias a medicamentos o alimentos"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="medications" className="text-foreground font-medium">
                  Medicamentos Actuales
                </Label>
                <Input
                  id="medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  placeholder="Medicamentos que tomas actualmente"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Privacy Notice */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-primary">Tu privacidad es importante:</span> Todos tus datos médicos están protegidos con encriptación AES-256 y cumplimos con HIPAA y GDPR.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                Procesando...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5" />
                Agendar Cita
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 group-hover:translate-x-full transition-transform duration-500"></div>
        </Button>
      </form>
    </div>
  );
}
