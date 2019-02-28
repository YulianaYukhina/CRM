var expressJwt = require('express-jwt');
var secret = sails.config.custom.secret;

module.exports = expressJwt({secret: secret});
