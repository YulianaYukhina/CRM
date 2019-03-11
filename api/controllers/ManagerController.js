module.exports = {
  CheckExistLogin: async (req, res) => {
    let data = req.query;
    //let t = await User.findOne({ login: data.login });
    if (await User.findOne({ login: data.login }))
      res.ok({ LoginIsExist: true });
    else
      res.ok({ LoginIsExist: false })
  },
  Save: async (req, res) => {
    let data = req.body;
    //let t = ;
    if (!await User.findOne({ login: data.login }) || req.file('photo')._files[0]) {
      let user = await User.CreateUser(data.login, data.newPassword, 'admin');
      if (user) {
        let manager = await Manager.create({
          name: data.firstName,
          surname: data.middleName,
          patronymic: data.lastName,
          phone: data.phone,
          mail: data.mail,
          user: user.id
        }).fetch();
        if (manager) {
          req.file('photo').upload({
            dirname: './photo',
            saveAs: manager.id + '.jpg',
          },
            async (err, file) => {
              if (err)
                console.log('Произошла ошибка при сохранении фото менеджера');
              manager.photoPath = file[0].fd;
              await Manager.updateOne({ id: manager.id }).set({ photoPath: file[0].fd });
            });
          res.ok();
        }
      }
    }
    res.badRequest('произошла ошибка при создании менеджера');

  }
};
