// src/pages/dashboard/index.tsx

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login'; // 重定向到登录页
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>欢迎来到 Dashboard</h1>
      <p>当前用户：{localStorage.getItem('username')}</p>
      <button
        type="button"
        onClick={handleLogout}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        退出登录
      </button>
    </div>
  );
};

export default Dashboard;
