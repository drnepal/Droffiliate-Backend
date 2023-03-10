
const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
    },
    {
      timestamps: true
  })
  
  module.exports = reviewSchema