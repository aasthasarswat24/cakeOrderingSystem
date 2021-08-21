const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const bcrypt = require('bcrypt')

function init(passport){
    passport.use(new LocalStrategy({usernameField:'email'}, async (email, password, done)=>{
        //login
        //checks if email exists already
        const user = await User.findOne({email:email})
        if(!user) {
            return done(null, false, {message:'No user with this email'})
        }
 
        //comparing password which user sends during logging in with the password present in database
        bcrypt.compare(password, user.password).then(match => {
            if(match){
                return done(null, user, {message:'Logged in successfully'})
            }
            return done(null, false, {message:'Wrong username or password'})
        }).catch(err => {
            return done(null, false, {message:'something went wrong'})
        })
    }))


    /* storing values in session after log in so that its easier to know if user is logged in or not: 
    (normally we store usr id in session) */
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    /* recieving whats ever saved in sessions */
    passport.deserializeUser((id, done) => {
        //req.user
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}

module.exports=init