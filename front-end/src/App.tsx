import { Sign } from 'crypto';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/registration/Register';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
