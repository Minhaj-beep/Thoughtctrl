const express = require('express')
const Book = require('../models/book')
const Author = require('../models/author')
const router = express.Router()

router.get('/', async(req, res)=>{
    const shorts = await Book.find({})
    res.send(shorts)
})

module.exports = router