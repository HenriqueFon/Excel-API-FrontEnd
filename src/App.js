import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Extract from './pages/Extract/Extract';
import SendExcel from './pages/SendExcel/SendExcel';
import Consult from './pages/Consult/Consult';

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
