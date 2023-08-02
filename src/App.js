import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home';
import Spam from './pages/Spam';
import Trash from './pages/Trash';
import MainPage from './radiobuttonexample/pages/MainPage';
import CheckboxPage from './checkboxexample/pages/CheckboxPage';
import SelectMain from './selectInputexample/pages/SelectMain';
import MainPageBasic from './basicexample/pages/MainPageBasic';

function App() {
  return (
    <div className="App">
      <Link to="/">Inbox</Link>
      <Link to="/spam"> Spam</Link>
      <Link to="/trash"> Trash</Link>
      <Link to="/main"> Radio Example</Link>
      <Link to="/checkboxdemo"> CheckBox  Demo</Link>
      <Link to="/selectmain">Select Demo</Link>
      <Link to="/basic">Basic Example</Link>
      <Routes> 
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/spam' element={<Spam/>}> Spam</Route>
        <Route path='/trash' element={<Trash/>}> Trash</Route>
        <Route path='/main' element={<MainPage/>}>Radio</Route>
        <Route path='/checkboxdemo' element={<CheckboxPage/>}>Checkbox Demo</Route>
        <Route path='/selectmain' element={<SelectMain/>}>Select Demo</Route>
        <Route path='/basic' element={<MainPageBasic/>}>Basic Example</Route>
      </Routes>
    </div>
  );
}

export default App;
