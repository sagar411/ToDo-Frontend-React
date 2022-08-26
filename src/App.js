import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js'
import  Login  from './Components/Login/Login';
import Header from './Components/Header/Header'
import { Register } from './Components/Register/Register.js';
function App() {
  return (
   
    <>
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/> 
            <Route path ='/login' element ={<Login/>}/>
            <Route path ="/register" element ={<Register/>}/>

          </Routes>
        
      </div>
      </Router>
    </>
    );
  
}

export default App;
