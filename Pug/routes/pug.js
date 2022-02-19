const path = require('path')
const { Router } = require('express');
const Products = require('../models/Products')

const router = new Router();
const productModel = new Products(path.join(__dirname, '../database/products.json'));

router.get('/', async (req, res) => {
  const products = await productModel.getAll()
  res.render('index', { products })
});

router.get('/add', (req, res) => res.render('new'));

router.get('/result', (req, res) => {
  const product = req.query.product
  res.render('result', { product })
});

router.post('/add', async (req, res) => {
  productModel.save(req.body)
  res.redirect(`/result?product=${req.body.name}`)
});

module.exports = router