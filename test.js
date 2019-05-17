var supertest = require('supertest');

// проверка механизма авторизации
describe('AuthController.login', function () {

    describe('#login()', function () {
        it('should get JWT token', function (done) {
            supertest(sails.hooks.http.app)
                .post('/users/login')
                .send({ name: 'test', password: 'P@ssw0rd' })
                .expect(200, 'token', done);
        });

        it('should error login', function (done) {
            supertest(sails.hooks.http.app)
                .post('/users/login')
                .send({ name: 'notLogin', password: 'P@ssw0rd' })
                .expect(400, done);
        });
    });

});

// проверка логина на существование
describe('AuthController.сheckExistLogin', function () {

    describe('#heckExistLogin()', function () {
        it('should get LoginIsExist: true', function (done) {
            supertest(sails.hooks.http.app)
                .post('/users/checkExistLogin')
                .send({ login: 'test' })
                .expect(200, { LoginIsExist: true }, done);
        });

        it('should get LoginIsExist: false', function (done) {
            supertest(sails.hooks.http.app)
                .post('/users/checkExistLogin')
                .send({ login: 'notLogin' })
                .expect(200, { LoginIsExist: false }, done);
        });
    });

});

// проверяем создание проекта
describe('ProjectController.save', function () {
    const manager = await Manager.finOne({ name: 'testManager' });
    const organization = await Organization.findOne({ name: 'testOrganization' });
    describe('#Save()', function () {
        it('should get Ok', function (done) {
            supertest(sails.hooks.http.app)
                .post('/project/save')
                .send({
                    projectName: 'testProjectName',
                    organization: organization.id,
                    addres: 'test addres',
                    manager: manager.id,
                    documents: 'documentsReference',
                    responsibleMiddleName: 'testMiddleName',
                    responsibleFirstName: 'testFirstName',
                    responsibleLastName: 'testLastName',
                    responsiblePhone: '8-800-000-00-00',
                    responsibleMail: 'test@test.test',
                    design: [],
                    constructionWork: [],
                    specialEngineeringSystems: [],

                })
                .expect(200, done);
        });

        it('should get BadRecuest', function (done) {
            supertest(sails.hooks.http.app)
                .post('/project/save')
                .send({})
                .expect(400, done);
        });
    });

});

describe('ProjectController.GetProjectList', function () {

    describe('#GetProjectList()', function () {
        it('should projectList.lenght >= 1', function (done) {
            supertest(sails.hooks.http.app)
                .get('/users/getProjectList')
                .send({ search: 'testProjectName' })
                .expect(200, res => res.projectList.lenght >= 1, done);
        });

        it('should projectList.lenght === 0', function (done) {
            supertest(sails.hooks.http.app)
                .get('/users/getProjectList')
                .send({ search: 'Поиск проекта которого нет в базе данных' })
                .expect(200, res => res.projectList.lenght === 0, done);
        });
    });

});

describe('AuthController.AddComment', function () {
    const manager = await Manager.finOne({ name: 'testManager' });
    const project = await project.finOne({ projectName: 'testProjectName' });
    describe('#AddComment()', function () {
        it('should get Ok', function (done) {
            supertest(sails.hooks.http.app)
                .post('/users/addComment')
                .send({
                    name: 'testUser',
                    message: 'testComment',
                    projectId: project.id,
                    type: 'userComment'
                })
                .expect(200, done);
        });
    });

});