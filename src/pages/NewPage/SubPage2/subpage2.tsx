// import { useColStyle } from 'antd/es/grid/style';
// import React, { createContext, useContext } from 'react';
import { useState } from 'react';
// import {useRef} from 'react'
import { useEffect } from 'react';

const URL = 'http://geek.itheima.net/v1_0/channels';
const SubPage2: React.FC = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const lst = await res.json();
      console.log(lst);
      setList(lst.data.channels);
    }
    getList();
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubPage2;
