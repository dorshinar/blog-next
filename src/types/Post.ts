import { z } from "zod";

export const PostSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date(),
  description: z.string(),
  published: z.boolean(),
  slug: z.string(),
  cover: z.any(),
});

export type PostMeta = z.infer<typeof PostSchema>;
