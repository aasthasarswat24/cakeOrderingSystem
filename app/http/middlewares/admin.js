function admin (req, res, next) {

    //checking first thet user is logged in and its role must be admin.... else redirect to home page
    
    if(req.isAuthenticated() && req.user.role === 'admin') {
        return next()
    }
    return res.redirect('/')
}

module.exports = admin