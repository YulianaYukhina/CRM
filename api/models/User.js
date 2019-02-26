module.exports = {
  attributes: {
    login: { type: 'string', required: true },
    password: { type: 'string', required: true },
    role: { type: 'string', required: true },
    salt: { type: 'string', required: true },
  },
  test: () => {
    return 'test function is worked!!'
  }
}