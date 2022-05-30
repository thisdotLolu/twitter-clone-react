import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { Routes,Route } from 'react-router-dom';
import Nothing from './Nothing';
import Profile from './Profile';
import NavbarBottom from './NavbarBottom';


function App() {
  return (
    <div className="app">
    {/* Sidebar */}
    <Sidebar/>
    <NavbarBottom/>

    {/* Feed */}
    <Routes>
    <Route exact path='/' element={<Feed/>}></Route> 
    <Route path='/error' element={<Nothing/>}></Route> 
    <Route path='/profile' element={<Profile/>}></Route> 
    </Routes>
    {/* Widgets */}
    <Widgets></Widgets>
    </div>
  );
}

export default App;
