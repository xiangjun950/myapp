// import { message } from "antd";

const users = [
  { id: 0, name: 'Umi', nickName: 'U1', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
  { id: 2, name: 'Tom', nickName: 'T', gender: 'FEMALE' },
];
let nextId = users.length + 1;
export default {
  // 获取
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  // 修改
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  // 添加
  'POST /api/v1/user/': (req: any, res: any) => {
    const { name, nickName, gender } = req.body;
    if (!name || !nickName || !gender) {
      res.json({
        success: false,
        errorCode: 404,
        message: '参数不完整',
      });
      return;
    }

    const newUser = {
      id: nextId++,
      name,
      nickName,
      gender,
    };
    users.push(newUser); // 添加到用户列表
    res.json({
      success: true,
      errorCode: 0,
      message: '添加成功！',
    });
  },

  // 'POST /api/v1/user/': (req: any, res: any) => {
  //   const body = req.body
  //   users.push({id: 4, name: body.name, nickName: body.nickName, gender: 'MALE' })
  //   res.json({
  //     success: true,
  //     errorCode: 0,
  //   });
  // },

  // 删除
  'delete /api/v1/user/:id': (req: any, res: any) => {
    // 从URL 中获取用户id
    const { id } = req.params;
    // 找到对应用户的索引
    const userIndex = users.findIndex(
      (users: any) => users.id === parseInt(id, 10),
    ); // paresInt(string , radix); (要转换为整数的字符串, 转换时使用的进制)
    if (userIndex !== -1) {
      users.splice(userIndex, 1); // 删除该用户
      res.json({
        succes: true,
        errorCode: 0,
        message: '用户删除成功！',
      });
    } else {
      res.json({
        succes: false,
        errorCode: 404,
        message: '用户不存在！',
      });
    }
  },
};
