import { useContext } from 'react';
import { DataContext } from '../App';

function Menu() {
  const { setAppState } = useContext(DataContext);

  return (
    <div className="menu">
      <h1>Menu Component</h1>
      <button onClick={() => setAppState('quiz')}>เริ่มทำแบบทดสอบ</button>
    </div>
  );
}

export default Menu;
