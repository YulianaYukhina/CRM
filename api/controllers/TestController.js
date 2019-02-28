module.exports = {
  Test : async (req, res) => {
    let newUser = await User.create({
      login: 'User',
      password: 'P@ssw0rd',
      role: 'user'
    }).fetch();
    res.status(200).send(newUser);
  }
};
