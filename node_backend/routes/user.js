const express = require('express')
const router = express.Router()

router.use('/',(req, res)=>{
   res.send("Here are the users")
}) 

router.put('/',(req, res)=>{
    res.send("Here are the users")
 })

router.post('/',(req, res)=>{
    res.send("Here are the users")
 })

router.delete('/',(req, res)=>{
    res.send("Here are the users")
 })
 module.exports =router