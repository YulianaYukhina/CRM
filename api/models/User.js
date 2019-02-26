module.exports = {
  attributes: {
    login: { type: 'string', required: true },
    password: {
      type: 'string',
      required: true,
      protect: true,
    },
    role: { type: 'string', required: true },
  },
  test: () => {
    return 'test function is worked!!';
  }
};
