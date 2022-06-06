import './App.css';
import Main from './component/Main/Main';
import Menu from './component/Menu/Menu';
import getFolderSize from 'get-folder-size'; 
import fs from 'fs'




function App() {



  return (
    <div className="container">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
