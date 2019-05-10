module.exports = {
  attributes: {
    userName: {
      type: 'string',
      required: true
    },
    userId: {
      type: 'string',
      required: true
    },
    project: {
      model: 'Project',
      required: true
    },
    message: {
      type: 'string',
      required: true
    },
    // Типо комментария adminComment - коментарии которые видят только админы, userComment - коментарии которые видят и админы и пользователи
    type: {
      type: 'string',
      defaultsTo: 'userComment'
    }
  }
};
