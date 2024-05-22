import './App.css';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import GetAllUser from './GetAllUsers';
import GetUserCardsById from './GetUserCardsById';
import AddUser from './AddUser';
import AddCard from './AddCard';
import UpdateCard from './UpdateCard';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <Router>
      <div className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AddUser" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
                Add User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<GetAllUser/>}/>
        <Route path='/User/:id' element={<GetUserCardsById/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/AddCard/:id' element={<AddCard/>}/>
        <Route path='/UpdateCard/:id' element={<UpdateCard/>}/>
        <Route path='/UpdateUser/:id' element={<UpdateUser/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
