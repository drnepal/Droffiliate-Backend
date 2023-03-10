const mongoose = require('mongoose')
const Product = require('./product')
const db = require('../../config/db')




const startProducts = [  {    
    "type": "Smartphone",   
     "description": "Brand new Samsung Galaxy S22 with 5G connectivity and Exynos 2200 chip",  
       "price": 799,    "category": "Electronics",  
      "image": "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-gold-fall22-a?wid=930&hei=930&fmt=webp", 
         "quantity": 15,  
},
{
  "type": "Laptop",
  "description": "Brand new Dell XPS 15 with 11th Gen Intel Core i7 and NVIDIA GeForce RTX 3050 Ti",
  "price": 1499,
  "category": "Electronics",
  "image": "https://webobjects2.cdw.com/is/image/CDW/6309901?$product-detail$",
  "quantity": 5,
 
},
{
  "type": "Smartwatch",
  "description": "Brand new Apple Watch Series 7 with Always-On Retina display and new watch faces",
  "price": 399,
  "category": "Electronics",
  "image": "https://example.com/apple-watch7.jpg",
  "quantity": 20,

},
{
  "type": "Sneakers",
  "description": "Brand new Nike Air Max 270 React with lightweight and breathable design",
  "price": 149,
  "category": "Fashion",
  "image": "https://examplehttps://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e7fc8f3-76b7-4631-b147-4dad4b1ff241/air-jordan-1-mid-shoes-X5pM09.png.com/nike-airmax270.jpg",
  "quantity": 25,

},
{
  "type": "Book",
  "description": "Brand new 'The Alchemist' by Paulo Coelho - a novel about following one's dreams",
  "price": 14.99,
  "category": "Books",
  "image": "https://examplehttps://m.media-amazon.com/images/I/71lG7br7k1L._AC_SX679_.jpg.com/the-alchemist.jpg",
  "quantity": 30,


}
]
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Product.deleteMany()
            .then(deletedProducts => {
                console.log('the deleted products:', deletedProducts)
                // now we add our pets to the db
                // Product.create(startProducts)
                //     .then(newProducts => {
                //         console.log('the new products', newProducts)
                //         mongoose.connection.close()
                //     })
                //     .catch(error => {
                //         console.log(error)
                //         mongoose.connection.close()
                //     })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })