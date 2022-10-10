const express = require('express')
const router = express.Router()
const {users,delete_user} = require('../controllers/user.Controller')
const logger = require('../middelware/logger')
const authorize = require('../middelware/authorize')
router.use(logger);
router.use('/all',authorize,users) 
router.use('/delete/:id([0-9]{2})',delete_user) 
router.put('/',users)

router.post('/',users)

router.delete('/',users)
 module.exports =router