// проверяет что пользователь юзер
module.exports = (req, res, next)=> {
  if(!req.user || req.user.role !== 'user'){
    res.forbiden();
  }
  next();
};
