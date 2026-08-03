import { z } from "zod";

export const appointmentSchema = z.object({
  hospitalId: z.string().min(1, "Hospital is required"),

  patientId: z.string().min(1, "Patient is required"),

  doctorId: z.string().min(1, "Doctor is required"),

  appointmentDate: z.string().min(1, "Appointment date is required"),

  appointmentTime: z.string().min(1, "Appointment time is required"),

  duration: z.coerce
    .number()
    .min(5)
    .max(180)
    .default(15),

  appointmentType: z.enum([
    "OPD",
    "FOLLOW_UP",
    "EMERGENCY",
    "TELECONSULTATION",
  ]),

  status: z.enum([
    "SCHEDULED",
    "CONFIRMED",
    "CHECKED_IN",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
    "NO_SHOW",
  ]),

  reason: z.string().optional(),

  notes: z.string().optional(),
});