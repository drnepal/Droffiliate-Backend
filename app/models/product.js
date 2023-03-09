// const mongoose = require('mongoose')


// const reviewSchema = mongoose.Schema({
// 	name:{type:String,required:true,},
// 	rating:{type:Number,required:true,},
// 	comment:{type:String,required:true,},
	
// 		timestamps:true,
	
// })


// 	const productSchema = mongoose.Schema({
// 		user: {
// 		  type: mongoose.Schema.Types.ObjectId,
// 		  required: true,
// 		  ref:user,
// 		},
// 		image:{
// 			type:String,
// 			required:true,
// 		},
// 		brand: {
// 			type: String,
// 			required: true,
		
// 		},
// 		category: {
// 			type: String,
// 			required: true,
// 		},
// 		description: {
// 			type:Boolean,
// 			required:true,
			
// 		},
// 		reviews: [reviewSchema],
// 		rating: {
// 			type: Number,
// 			required: true,
// 			default:0
		
// 		},
// 		numReviews: {
// 			type: String,
// 			required: true,
// 			default:0,
// 		},
// 		price:{
// 			type:Number,
// 			required:true,
// 			default:0,
// 		},
// 		countInStock:{
// 			type:Number,
// 			redquired:true,
// 			default:0,
// 		},

		

	
// 		timestamps: true,
// 	}
// )

// module.exports = mongoose.model('Product', productSchema)


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

module.exports = mongoose.model('Product', productSchema)