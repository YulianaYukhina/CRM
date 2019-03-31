const bcrypt = require('bcrypt'); // библиотека для шифрования
// модель организации
module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    user: {
      model: 'user',
      unique: true
    }
  },
  TestCreateOrganization: async () => {
    var user = await User.create({
      login: 'TestUser',
      password: await bcrypt.hash('P@ssw0rd', 10),
      role: 'user'
    }).fetch();

    return await Organization.create({
      name: 'TestOrganization',
      user: user.id
    }).fetch();
  }
};
