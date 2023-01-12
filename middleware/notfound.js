exports.notFound = (req, res, next) =>{
    console.log("erro")
    res.status(404).send('Route does not exist')
    
}