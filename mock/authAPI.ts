// 登录用户信息

const users = [
  { username: 'admin', password: 'admin', role: 'Admin' },
  { username: 'user', password: '123456', role: 'User' },
];

export default {
  'POST /api/v1/login': (req: any, res: any) => {
    const { username, password } = req.body;
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      res.json({
        success: true,
        data: {
          username: user.username,
          role: user.role,
          token: 'fake-jwt-token',
        },
      });
    } else {
      res.status(401).json({ success: false, message: '用户名或密码错误' });
    }
  },
};
