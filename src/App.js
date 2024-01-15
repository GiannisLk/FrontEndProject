import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Content from './Components/Content';
import Project from './Components/Project';
import ClassInfo from './Components/ClassInfo';
import { BrowserRouter, createBrowserRouter,createRoutesFromElements,Route,Routes,RouterProvider } from 'react-router-dom';
import SimilarClasses from './Components/SimilarClasses';

function App() {
const props = {};
  


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='dashboard' element={<Content/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='project/class' element={<ClassInfo/>}/>
        <Route path='project/class/similarClasses' element={<SimilarClasses/>}/>

      </Routes>


      {/* <Content/> */}
      {/* <Login/> */}
      {/* <Project/> */}
      {/* <ClassInfo/> */}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
