const books= (req, res)=>{
    res.send([
        {
          id: 1,
          title: "Harry Potter",
        }
      ])
}
const book_status=(req, res) => {
    res.status(201).send();
  }
 module.exports={books,book_status};