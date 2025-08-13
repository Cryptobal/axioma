import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^\d{9}$/, 'El celular debe tener 9 dígitos'),
  website: z.string().url('URL de página web inválida'),
  company: z.string().optional(),
  message: z.string().min(10, 'Cuéntanos un poco más'),
})

export type ContactForm = z.infer<typeof contactSchema>

export const contactApiSchema = contactSchema.extend({
  size: z.string().min(1, 'Selecciona un tamaño'),
  pain: z.string().min(1, 'Selecciona un dolor principal'),
  company: z.string().optional(),
})

export type ContactApiForm = z.infer<typeof contactApiSchema>


