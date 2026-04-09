import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"

export const reviews5Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      links: linkSchema.array(),
      items: z
        .object({
          title: z.string(),
          description: z.string(),
          rating: z.number(),
          image: imageSchema(ctx),
          item: z
            .object({
              title: z.string(),
              description: z.string(),
              image: imageSchema(ctx),
            })
            .partial()
            .strict(),
        })
        .partial()
        .strict()
        .array(),
    })
    .partial()
    .strict()

export type Reviews5Schema = z.infer<ReturnType<typeof reviews5Schema>>
