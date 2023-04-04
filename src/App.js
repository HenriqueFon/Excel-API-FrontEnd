import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Extract from './Components/Extract/Extract';
import SendExcel from './Components/SendExcel/SendExcel';
import Consult from './Components/Consult/Consult';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/Extract" element = {<Extract />} />
              <Route path = "/SendExcel" element = {<SendExcel />} /> 
              <Route path = "/Consult" element = {<Consult />} />   
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
