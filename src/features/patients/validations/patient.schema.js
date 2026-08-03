import { z } from "zod";

export const patientSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50),

  age: z.coerce
    .number()
    .min(0)
    .max(120),

  gender: z.enum([
    "MALE",
    "FEMALE",
    "OTHER",
  ]),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid mobile number"
    ),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  address: z
    .string()
    .optional(),

  bloodGroup: z
    .enum([
      "A_POS",
      "A_NEG",
      "B_POS",
      "B_NEG",
      "AB_POS",
      "AB_NEG",
      "O_POS",
      "O_NEG",
    ])
    .optional(),

  emergencyContact: z
    .string()
    .optional(),
});