const passport = require('passport');
const jwt = require('jsonwebtoken');

// этот контроллер отвечает за авторизацию
module.exports = {
  Login: async (req, res) => { // логин(вход)
    passport.authenticate('local', (err, user) => {
      if(err || !user){
        res.status(400).send({
          message: 'Пользователь с таким сочетанием логина\пароля не найден'
        });
      }
      // Время жизни токена - 3 дня
      let token = jwt.sign(user, sails.config.custom.secret, { expiresIn: 60 * 60 * 24 * 3});
      res.ok({
        token: token,
        role: user.role,
      });
    })(req, res);
  },
  Logout: async (req, res) => { // логаут(выхож)
    req.logout();
    req.session.destroy();
    res.status(200).send();
  }
};
