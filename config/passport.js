const passport = require('passport')
const strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt-nodejs')

passport.use(new strategy(async (login, password, done) => {
    user = await User.findOne({login: login});
    if(!user)
        return done(null,false, {message: 'invalid user/password'});
    bcrypt.compare(password, user.password, (err, res) => {
        if(err || !res)
            return done(null, false, {message: 'invalid user/password'});
        else
            return done(null, user);
    })
}))

module.exports = {
    http: {
        middleware: {
            passportInit: passport.initialize(),
            passportSession: passport.session()
          },
    }
}


