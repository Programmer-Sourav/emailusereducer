import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home';
import Spam from './pages/Spam';
import Trash from './pages/Trash';

function App() {
  return (
    <div className="App">
      <Link to="/">Inbox</Link>
      <Link to="/spam"> Spam</Link>
      <Link to="/trash"> Trash</Link>
      <Routes> 
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/spam' element={<Spam/>}> Spam</Route>
        <Route path='/trash' element={<Trash/>}> Trash</Route>
      </Routes>
    </div>
  );
}

export default App;
