const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const getAll = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getAll);

  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryDataByID = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryDataByID) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryDataByID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);
    res.status(200).json(createCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!updateCategory) {
      res.status(404).json({ message: 'No category found with that id!' });

      return;
    }

    res.status(200).json(updateCategory);

  } catch (err) {

    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });

    if (!deleteCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
    }

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
