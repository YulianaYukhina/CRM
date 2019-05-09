module.exports = {
  attributes: {
    userName: { // название проекта
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
  }
};
