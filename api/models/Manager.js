const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    surname: {
      type: 'string',
      required: true
    },
    patronymic: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    mail: {
      type: 'string',
      required: true
    },
    photoPath: {
      type: 'string'
    },
    user: {
      model: 'user',
      unique: true
    }
  },
  TestCreateManager: async () => {
    var user = await User.create({
      login: 'Test',
      password: await bcrypt.hash('P@ssw0rd', 10),
      role: 'admin'
    }).fetch();

    return await Manager.create({
      name: 'Test',
      surname: 'Test2',
      patronymic: 'Test3',
      phone: '+79990000000',
      mail: 'test@test.com',
      user: user.id
    }).fetch();
  }
};
