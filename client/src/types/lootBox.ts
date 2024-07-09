import { z } from 'zod';

export const lootBoxSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  available: z.boolean(),
});

export const reqBodySchema = lootBoxSchema.omit({ id: true });

export type LootBoxType = z.infer<typeof lootBoxSchema>;

export type LootBoxReqBodyType = z.infer<typeof reqBodySchema>;
