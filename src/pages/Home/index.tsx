import Guide from '@/components/Guide';
import { queryUserList } from '@/services/demo/UserController';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';
import styles from './index.less';

interface ButtonProps {
  count: number;
  onClick: any;
}
const MyButton: React.FC<ButtonProps> = (props) => {
  const { count, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
};

export function MyApp() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={styles.div}>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  useEffect(() => {
    queryUserList({});
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <MyApp />
      </div>
    </PageContainer>
  );
};

export default HomePage;
