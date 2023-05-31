import { z } from "zod";

export const createGameSchema = z.object({
  name: z
    .string({
      message: "Title must be a string",
    })
    .min(3, {
      message: "Title must be at least 3 character",
    })
    .max(100),
  description: z
    .string({
      message: "Description must be a string",
    })
    .max(1000)
    .optional(),
});
