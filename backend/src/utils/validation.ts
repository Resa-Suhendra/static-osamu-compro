import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export type NewUser = z.infer<typeof userCreateSchema>;

export const contactMessageCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export type NewContactMessage = z.infer<typeof contactMessageCreateSchema>;

