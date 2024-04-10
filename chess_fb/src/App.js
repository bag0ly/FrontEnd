import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GetAllChesser from './Components/GetAllChesser.js';
import NavBar from './Components/NavBar.js';
import GetByIdChesser from './Components/GetByIdChesser.js';
import ModChesser from './Components/ModChesser.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<GetAllChesser />} />
        <Route path="/chesser/:id" element={<GetByIdChesser />} />
        <Route path="/modify-chess/:id" element={<ModChesser />} />
        
        <Route path="*" element={<GetAllChesser />} />

      </Routes>
    </Router>
  );
  
}

export default App;
