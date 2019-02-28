module.exports = (req, res, next)=> {
  if(!req.user || req.user.role !== 'admin'){
    res.forbiden();
  }
  next();
};
