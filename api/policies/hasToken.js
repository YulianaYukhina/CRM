var expressJwt = require('express-jwt'); // библиотека для работы с jwt токенами
var secret = sails.config.custom.secret; // получаем скретный ключ

module.exports = expressJwt({secret: secret}); // политика которая проверяет наличие токена (т.е. пользователь авторизован)
