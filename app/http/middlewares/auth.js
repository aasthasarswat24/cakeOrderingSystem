function auth(req, res, next) {

    //checking first thet user is logged in .... else redirect to login
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/login')
}

module.exports= auth