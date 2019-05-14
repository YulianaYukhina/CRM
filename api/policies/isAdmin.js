// политика которая проверяет что пользователь админ
module.exports = (req, res, next)=> {
  if(!req.user || (req.user.role !== 'admin' && req.user.role !== 'mainAdmin')){
    res.forbidden();
  }
  next();
};
