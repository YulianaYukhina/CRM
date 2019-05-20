/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const bcrypt = require('bcrypt');

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() === 0) {
  //   User.CreateUser('User', 'P@ssw0rd','user');
  //   User.CreateUser('Admin', 'P@ssw0rd','admin');
  // }

  if (await Manager.count() === 0) {
    Manager.TestCreateManager();
  }
  if (await Organization.count() === 0) {
    Organization.TestCreateOrganization();
  }

  if(!User.findOne({role: 'mainAdmin'})){
    var user = await User.create({
      login: 'MainAdmin',
      password: await bcrypt.hash('P@ssw0rd', 10),
      role: 'mainAdmin'
    }).fetch();

    // await Manager.create({
    //   name: 'Main',
    //   surname: 'Admin',
    //   patronymic: 'Adminovich',
    //   phone: '8 800-355-35-35',
    //   mail: 'admin@admin.com',
    //   user: user.id
    // }).fetch();
  }
  // ```

};
