/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
// маршрутизация ( связывает действие контроллера с определенным урл_ом)
module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/test': 'Test.Test',
  'GET /testTest': 'Test.TestTest',
  'GET /testUser': 'Test.TestUser',
  'GET /testAdmin': 'Test.TestAdmin',
  'POST /user/login': 'Auth.Login',
  'GET /user/logout': 'Auth.Logout',
  'GET /user/checkExistLogin': 'Auth.CheckExistLogin',
  'POST /manager/save': 'Manager.Save',
  'GET /manager/getManagers': 'Manager.GetManagersList',
  'POST /organization/save': 'Organization.Save',
  'GET /organization/getOrganizations': 'Organization.GetOrganizationsList',
  'POST /project/save': 'Project.Save',
  'GET /project/getProjectList': 'Project.GetProjectList',
  'GET /project/deleteProject': 'Project.DeleteProject',
  'GET /project/getProject': 'Project.GetProject',
  'GET /*': {
    controller: 'AppController',
    action: 'index',
    skipAssets: true,
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
