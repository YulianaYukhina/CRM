const bcrypt = require('bcrypt'); // библиотека для шифрования
// модель пользователя(она содердится в менеджере и в организации)
module.exports = {
  attributes: {
    login: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      required: true
    }
  },
  CreateUser: async (login, password, role) => {
    return await User.create({
      login: login,
      password: await bcrypt.hash(password, 10),
      role: role
    }).fetch();
  }
};
