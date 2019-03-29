// настройка библиотеки пасспорт

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.use(new localStrategy({
  usernameField: 'login',
},
  async (login, password, done) => {
    let user = await User.findOne({ login: login });
    if (!user) {
      return done(null, false, {
        message: 'user not found'
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    }
    else {
      return done(null, false, {
        message: 'invalid password'
      });
    }
  }
));

module.exports = {
  http: {
    customMiddleware: function (app) {
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
}
