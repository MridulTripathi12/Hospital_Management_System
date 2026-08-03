import { z } from "zod";

export const doctorSchema = z.object({
  // User
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z.string().optional(),

  gender: z
    .enum(["MALE", "FEMALE", "OTHER"])
    .optional(),

  // Doctor
  hospitalId: z.string().min(1, "Hospital is required"),

  departmentId: z.string().min(1, "Department is required"),

  employeeId: z.string().optional(),

  specialization: z
    .string()
    .min(2, "Specialization is required"),

  qualification: z
    .string()
    .min(2, "Qualification is required"),

  licenseNumber: z.string().optional(),

  experience: z.coerce
    .number()
    .min(0, "Experience must be positive"),

  consultationFee: z.coerce
    .number()
    .min(0, "Fee must be positive"),

  roomNumber: z.string().optional(),

  joiningDate: z.string().optional(),

  alternatePhone: z.string().optional(),

  address: z.string().optional(),

  city: z.string().optional(),

  state: z.string().optional(),

  country: z.string().optional(),

  zipCode: z.string().optional(),

  bio: z.string().optional(),

  languages: z.string().optional(),

  status: z.enum([
    "AVAILABLE",
    "BUSY",
    "ON_LEAVE",
  ]),
});