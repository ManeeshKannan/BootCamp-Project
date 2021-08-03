const productController = require('../controllers/productContrroller');
const express = require('express');

const router = express.Router();

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getAllProducts);

router
  .route('/:id')
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);
  
module.exports = router;
