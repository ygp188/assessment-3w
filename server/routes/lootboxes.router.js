const { Router } = require('express');
const { LootBox } = require('../db/models');
const { boxSchema, reqBodySchema } = require('../schemas/lootboxSchema');

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const boxes = await LootBox.findAll();
      res.status(200).json(boxSchema.array().parse(boxes));
    } catch (error) {
      console.log('Ошибка получения всех лутбоксов', error, error?.issues);
      res.status(500).json({ message: 'Ошибка получения всех лутбоксов' });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, price, description } = reqBodySchema.parse(req.body);
      const newBox = await LootBox.create({ name, price, description });
      res.json(boxSchema.parse(newBox));
    } catch (error) {
      console.log('Ошибка добавления лутбокса', error, error?.issues);
      res.status(500).json({ message: 'Ошибка добавления лутбокса' });
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const box = await LootBox.findByPk(id);
    if (!box) throw new Error('LootBox not found');
    await box.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log('Ошибка удаления лутбокса', error, error?.issues);
    res.status(500).json({ message: 'Ошибка удаления лутбокса' });
  }
});

router.patch('/:id/buy', async (req, res) => {
  try {
    const { id } = req.params;
    const box = await LootBox.findByPk(id);
    if (!box) throw new Error('Box not found');
    await box.update({ available: false });
    res.sendStatus(200);
  } catch (error) {
    console.log('Ошибка покупки лутбокса', error, error?.issues);
    res.status(500).json({ message: 'Ошибка покупки лутбокса' });
  }
});

module.exports = router;
