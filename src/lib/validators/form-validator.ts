import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type TFormShemaType = z.infer<typeof FormSchema>;
