const Products = require('../models/Products');
const path = require('path');
const productModel = new Products(path.join(__dirname, '../database/products.json'));
const { Router } = require('express');
const router = new Router();

router.get('/', async (req, res) => {
    const products = await productModel.getAll();
    res.render( "main", { layout: "index", products } )
})

router.get('/add', (req, res) => res.render('form', { layout: "index" }));

router.get('/result', (req, res) => {
  const product = req.query.product
  res.render('result', { layout: "index", product })
});

router.post('/add', async (req, res) => {
  productModel.save(req.body)
  res.redirect(`/result?product=${req.body.name}`)
});


module.exports = router;