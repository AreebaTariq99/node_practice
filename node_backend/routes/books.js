const express = require('express')
const {books,book_status} = require('../controllers/book.Controller')
const router = express.Router()

router.get('/',books)
router.post('/',book_status);
module.exports =router