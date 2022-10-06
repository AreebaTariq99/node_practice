module.exports= logger=async (req,res,next)=>{
    console.log(req.originalUrl)
    next()
    console.log("After")
    }