function guest (req, res, next) {

    //return to homepage if someone is not already logged in 
    if(!req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/')
}
module.exports=guest