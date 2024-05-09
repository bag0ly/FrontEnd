import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import GetAllData from "./GetAllData.js"; 
import AddTanar from "./AddTanar.js";
import UpdateTanar from "./UpdateTanar.js";
import GetById from "./GetById.js";

function App() {
  return (
      <Router>
          <div className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to={`/`} className="nav-link">
                       <span className="nav-link">Tanarok</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={`/AddTanar`} className="nav-link">
                       <span className="nav-link">Add Tanar</span>
                    </NavLink>
                  </li>
                </ul>
             </div>
          </div>

          <Routes>
            <Route path='/' element={<GetAllData />}/>
            <Route path='/AddTanar' element={<AddTanar />}/>
            <Route path='/UpdateTanar/:id' element={<UpdateTanar />}/>
            <Route path='/Tanar/:id' element={<GetById/>}/>

            <Route path="*" element={<GetAllData />}/>
          </Routes>
      </Router>
  );
}

export default App;
