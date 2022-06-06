import './App.css';
import Main from './component/Main/Main';
import Menu from './component/Menu/Menu';
import getFolderSize from 'get-folder-size'; 
import fs from 'fs'
// import pathbrowserify from 'path-browserify'



function App() {


  const Analyse= async ()=>{
    const myFolder = "C:/Users/Youcode/Documents/Adobe";

    const size = await  getFolderSize.loose(myFolder);
    console.log(`The folder is ${size} bytes large`);
    console.log(`That is the same as ${(size / 1000 / 1000).toFixed(2)} MB`);
  }
  Analyse();

  return (
    <div className="container">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
