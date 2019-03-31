module.exports = {
  Save: async (req, res) => {
    let data = req.body;
    let manager = await Manager.findOne({ id: data.manager });
    if (manager) {
      let project = await Project.create({
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
      }).fetch();
      if (project)
        res.ok();
    }
    res.badRequest('произошла ошибка при создании менеджера');
  },
  GetProjectList: async (req, res) => {
    var projectList = await Project.find();
    if(projectList){
      for(var i = 0; i < projectList.length; i++){
        projectList[i].manager = await Manager.findOne({id: projectList[i].manager});
      }
    }
    res.ok(projectList);
  }
};
