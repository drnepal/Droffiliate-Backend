const express = require('express');
const router = express.Router();
const { Product, Review } = require('../models/review');

// Add review for a product
router.post('/products/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { user, comment, rating } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send('Product not found');
    }

    const review = new Review({
      user,
      comment,
      rating
    });

    await review.save();
    product.reviews.push(review);
    await product.save();
    res.status(201).send(review);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
