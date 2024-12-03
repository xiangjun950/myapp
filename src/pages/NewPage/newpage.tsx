import React from 'react';
import { Outlet } from 'umi';
import './newpage.less';

const NewPage: React.FC = () => {
  return (
    <>
      <div>Welcome to NewPage</div>
      <Outlet />
    </>
  );
};

export default NewPage;
