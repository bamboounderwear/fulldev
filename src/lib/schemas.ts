export type { PageSchema } from "@/schemas/page"

export type BlockSchema = {
  block?: string
  type?: string
  ref?: string
  refs?: string[]
  glob?: string
  html?: string
  [key: string]: unknown
}
