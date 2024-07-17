import { z } from "zod";



type loginSchema = z.infer<typeof loginSchema>;



export const loginSchema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
});
