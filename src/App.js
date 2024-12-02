import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Components/Signup/Signup"
import Login from "./Components/Login/Login"
import Main from './Components/Main/Main';

function App() {
  return (
    <Router>
   
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
