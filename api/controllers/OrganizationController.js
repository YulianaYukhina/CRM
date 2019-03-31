// действия с сущьностью организации
module.exports = {
  Save: async (req, res) => { // создать организации
    let data = req.body;
    if (!await User.findOne({ login: data.login })) {
      let user = await User.CreateUser(data.login, data.newPassword, 'user');
      if (user) {
        let organization = await Organization.create({
          name: data.name,
          user: user.id
        }).fetch();
        if (organization) {
          res.ok();
        }
      }
    }
    res.badRequest('произошла ошибка при создании организации');
  },
  GetOrganizationsList: async (req, res) => { // получить список организаций
    var organization = await Organization.find();
    res.ok(organization);
  }
};
