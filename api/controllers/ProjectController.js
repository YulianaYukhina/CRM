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
    let search = req.query.search;
    var projectList;
    if (search) {
      projectList = await Project.find({
        or: [
          { projectName: { contains: search } },
          { addres: { contains: search } }
        ]
      });
    } else {
      projectList = await Project.find();
    }
    if (projectList) {
      for (var i = 0; i < projectList.length; i++) {
        projectList[i].manager = await Manager.findOne({ id: projectList[i].manager });
        projectList[i].organization = await Organization.findOne({ id: projectList[i].organization });
      }
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
    res.ok(project);
  },
};
