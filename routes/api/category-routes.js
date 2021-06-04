const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
Category.findAll({
  // find all categories
  // be sure to include its associated Products
  include: [Product]
  }).then(categories => {
    res.json(categories);
  }).catch(err => {
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(category => {
    res.json(category);
  }).catch(err => {
    res.status(500).json(err)
  })
  // find one category by its `id` value

  // be sure to include its associated Products

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(category => {
    res.json(category);
  }).catch(err => {
    res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(category => {
    res.json(category);
  }).catch(err => {
    res.status(500).json(err)
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(category => {
    res.json(category);
  }).catch(err => {
    res.status(500).json(err)
  });
});

module.exports = router;
