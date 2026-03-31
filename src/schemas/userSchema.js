import { z } from "zod";

export const userSchema = z.object({
  login: z.string(),
  avatar_url: z.string(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  followers: z.number(),
  following: z.number(),
  blog: z.string().nullable().optional(),
  twitter_username: z.string().nullable().optional(),
});
