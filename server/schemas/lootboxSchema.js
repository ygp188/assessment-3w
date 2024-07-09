const { z } = require('zod');

const boxSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

const reqBodySchema = boxSchema.omit({ id: true });

module.exports = {
  boxSchema,
  reqBodySchema,
};
