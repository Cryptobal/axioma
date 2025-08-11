import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Cuéntanos un poco más'),
})

export type ContactForm = z.infer<typeof contactSchema>


