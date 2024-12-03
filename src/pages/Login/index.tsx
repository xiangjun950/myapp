// src/pages/login/index.tsx
import { useState } from 'react';
/// <reference types="axios" />
import axios from 'axios';
import { history } from 'umi';

// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input, Flex } from 'antd';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    axios
      .post('/api/v1/login', formData)
      .then((response: any) => {
        const { token, username, role } = response.data.data;
        // 保存登录状态
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        // 跳转到主页面
        history.push('/dashboard');
      })
      .catch((error: any) => {
        setErrorMessage(error.response?.data?.message || '登录失败');
      });
  };

  return (
    <div style={{ width: '300px', margin: '100px auto', textAlign: 'center' }}>
      <h1>登录</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <input
          type="text"
          placeholder="用户名"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="密码"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
        />
        <button
          type="button"
          onClick={handleLogin}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
