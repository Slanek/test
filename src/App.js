import './App.css';
import { useState } from 'react';
import List from './components/List';
import Tiles from './components/Tiles';
import users from './local/users.json'
const App = () => {
  const [list, setList] = useState(true)
  const handleClick = (value) => {
    setList(value)
  }
  return (
    <main>
      <div className='btnGroup'>
        <button onClick={() => handleClick(true)} className={list ? 'buttonActive' : null}>List</button>
        <hr />
        <button onClick={() => handleClick(false)} className={!list ? 'buttonActive' : null}>Tiles</button>
      </div>
      {
        list ? <List  users={users}/>
          : <Tiles users={users}/>
      }
    </main>
  );
}

export default App;
