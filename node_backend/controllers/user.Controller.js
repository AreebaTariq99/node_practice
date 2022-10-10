const users= (req, res)=>{
    res.send("Here are the user 1")
 }
 const delete_user= (req, res)=>{
    console.log(req.params)
    const {id}= req.params
    console.log(id)
    if (id==10) {
        res.send("cannot delete")
    }
    else{
        res.send(`Student deleted ${id}`)
    }
    
 }
 module.exports={users,delete_user};