const express = require('express')

const passport = require('passport')

const Goal = require('../models/product')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const product = require('../models/product')
const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()

// ROUTES

// POST -> Create a review

router.post('/review/:productId', requireToken, removeBlanks, (req, res, next) => {
    req.body.review.owner = req.user.id
    const review = req.body.review
    const productId = req.params.productId
    product.findById(productlId)
        .then(handle404)
        .then(product => {
            
            console.log('the product: ', product)
            console.log('the reviews: ', review)
            product.review.push(review)
            return product.save()
        })
        .then(product => res.status(201).json({ product: product }))
        // pass errors along to our error handler
        .catch(next)
})

// DELETE -> Delete a review

router.delete('/review/:goalId/:commentId', requireToken, (req, res, next) => {
    const goalId = req.params.goalId
    const commentId = req.params.commentId
    Goal.findById(goalId)
    .then(handle404)
    .then(product => {
        const theReview = product.reviews.id(reviewId)
        requireOwnership(req, theReview)
        theReview.remove()
        return product.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router