module.exports = validateUsers=async (req,res,next)=>{
    if (req.query.user_id==='1') {
        next()
    }
    else{
        res.send("Not Authorized")
    } 
    }