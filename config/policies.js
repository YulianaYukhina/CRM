/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

let isUser = ['hasToken', 'isUser'];
let isAdmin = ['hasToken', 'isAdmin'];
// настройка доступа к различным методам в контроллерах
module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,
  TestController: {
    TestUser: isUser,
    TestAdmin: isAdmin,
    TestTest: 'hasToken'
  },
  ManagerController: isAdmin,
  ProjectController: isAdmin,
  OrganizationController: isAdmin,

};
