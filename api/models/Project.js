module.exports = {
  attributes: {
    projectName: { // название проекта
      type: 'string',
      //required: true
    },
    organization: {
      model: 'Organization',
      //required: true
    },
    addres: {
      type: 'string',
      //required: true
    },
    manager: {
      model: 'manager'
    },
    documents: {
      type: 'string',
      //required: true
    },
    responsibleMiddleName: {
      type: 'string'
    },
    responsibleFirstName: {
      type: 'string'
    },
    responsibleLastName: {
      type: 'string'
    },
    responsiblePhone: {
      type: 'string'
    },
    responsibleMail: {
      type: 'string'
    },
    design: {
      type: 'json',
      columnType: 'array'
    },
    constructionWork: {
      type: 'json',
      columnType: 'array'
    },
    specialEngineeringSystems: {
      type: 'json',
      columnType: 'array'
    },
  }
};
