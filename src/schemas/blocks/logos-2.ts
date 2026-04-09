import { z, type SchemaContext } from "astro:content"

import { logoSchema } from "@/schemas/fields/logo"

export const logos2Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      logos: logoSchema(ctx).array(),
    })
    .partial()
    .strict()

export type Logos2Schema = z.infer<ReturnType<typeof logos2Schema>>
