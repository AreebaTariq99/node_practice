const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.send([
        {
          id: 1,
          title: "Harry Potter",
        }
      ])
})
router.post('/', (req, res) => {
    res.status(201).send();
  });
module.exports =router