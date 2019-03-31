// действия с сущьностью менеджера
module.exports = {
  Save: async (req, res) => { // создать менеджера
    let data = req.body;
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
          req.file('photo').upload({ // загружаю файд с названием "photo"
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
  },
  GetManagersList: async (req, res) => { // получить список менеджеров
    var managers = await Manager.find();
    res.ok(managers);
  }
};
