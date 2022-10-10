const express = require('express')
const comments = require('../controllers/comment.Controller')
const router = express.Router()

router.get('/',comments)

router.put('/',comments)

router.post('/',comments)

router.delete('/',comments)
 module.exports =router