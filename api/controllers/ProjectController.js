module.exports = {
  Save: async (req, res) => {
    let data = req.body;
    let manager = await Manager.findOne({ id: data.manager });
    if (manager) {
      let project = await Project.create({
        projectName: data.projectName,
        organization: data.projectName,
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
      if(project)
        res.ok();
    }
    res.badRequest('произошла ошибка при создании менеджера');
  }
};
