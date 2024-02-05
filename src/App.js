

import './App.css';
 
import React, { useState, useEffect } from 'react';
 
import { ConfigProvider } from 'antd';
import frFR from 'antd/locale/fr_FR';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Pages/Contact';
import Index from './Pages/Index';
import Inscription from './Pages/Inscription';
import Login from './Pages/Login';
import Participation from './Pages/Participation';


 
 
 
function App() {
  return (
    <ConfigProvider locale={frFR}>
 
    <BrowserRouter>
    <Routes>
 
      <Route path="/contact" element={(<Contact/>)} ></Route>
      <Route path="/index" element={(<Index/>)} ></Route>
      <Route path="/inscription" element={(<Inscription/>)} ></Route>
      <Route path="/login" element={(<Login/>)} ></Route>
      <Route path="/participation" element={(<Participation/>)} ></Route>
  
 
    </Routes >
  </BrowserRouter >
  </ConfigProvider>
  );
}

 
export default App;