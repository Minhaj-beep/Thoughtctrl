const express = require('express')
const Book = require('../models/book')
const Author = require('../models/author')
const router = express.Router()

router.get('/', async(req, res)=>{
    const lang = await Author.find({})
    res.send(lang)
})

module.exports = router