module.exports = {
  Save: async (req, res) => {
    let data = req.body;
    let manager = await Manager.findOne({ id: data.manager });
    if (manager) {
      let project;
      if (data.id) {
        project = await Project.findOrCreate({ id: data.id });
      } else {
        project = await Project.create().fetch();
      }
      project = await Project.updateOne({ id: project.id }).set({
        projectName: data.projectName,
        organization: data.organization,
        addres: data.addres,
        manager: manager.id,
        documents: data.documents,
        responsibleMiddleName: data.responsibleMiddleName,
        responsibleFirstName: data.responsibleFirstName,
        responsibleLastName: data.responsibleLastName,
        responsiblePhone: data.responsiblePhone,
        responsibleMail: data.responsibleMail,
        design: data.design,
        constructionWork: data.constructionWork,
        specialEngineeringSystems: data.specialEngineeringSystems,
      });
      if (project)
        res.ok();
    }
    res.badRequest('произошла ошибка при создании менеджера');
  },

  GetProjectList: async (req, res) => {
    let search = (req.query.search || '').toLowerCase();
    let onlyMyProject = req.query.onlyMyProjects == 'true';
    var projectList;
    projectList = await Project.find()
      .populate('manager')
      .populate('organization');
    projectList = projectList.filter(ob => ob.projectName.toLowerCase().indexOf(search) != -1
      || ob.addres.toLowerCase().indexOf(search) != -1
      || ob.manager.surname.toLowerCase().indexOf(search) != -1)

    if (projectList && req.user && req.user.role === 'user') {
      projectList = projectList.filter(ob => ob.organization.user == req.user.id);
    }

    if (projectList && req.user && req.user.role === 'admin' && onlyMyProject) {
      projectList = projectList.filter(ob => ob.manager.user == req.user.id);
    }

    res.ok(projectList);
  },

  DeleteProject: async (req, res) => {
    let id = req.query.id;
    await Project.destroyOne({ id });
    res.ok();
  },

  GetProject: async (req, res) => {
    let id = req.query.id;
    let project = await Project.findOne({ id });
    let comments = await ProjectComment.find({ project: project.id });
    if(req.user && req.user.role === 'user'){
      comments = comments.filter(ob => ob.type == 'userComment');
    }
    project.comments = comments;
    res.ok(project);
  },

  AddComment: async (req, res) => {
    let { name, message, projectId, type } = req.body;
    await ProjectComment.create({
      userName: name,
      userId: req.user.id,
      project: projectId,
      message: message,
      type: type
    })
    res.ok();
  }
};
