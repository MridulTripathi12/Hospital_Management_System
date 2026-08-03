import { z } from "zod";

export const loginSchema = z.object({
  hospitalCode: z
    .string()
    .trim()
    .min(1, "Hospital code is required"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});