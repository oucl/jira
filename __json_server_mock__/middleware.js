module.exports = function (req, res, next) {
  // console.log('middleware');
  if (req.method === "POST") {
    if (req.path === "/login") {
      // if (req.body.username === "admin" && req.body.password === "123456") {
      if (req.body.username) {
        return res.status(200).json({
          code: 200,
          message: "登录成功",
          data: {
            ...req.body,
            token: "token123456",
          },
        });
      } else {
        return res.status(400).json({
          code: 400,
          message: "用户名或密码错误",
        });
      }
    }
  }
  next();
};
