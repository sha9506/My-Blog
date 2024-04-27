import React, { useState } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App=()=>
{
  const[username, setUsername]=useState("");

  return(<BrowserRouter>
    <Routes>
        <Route path='/login' exact element={<Login username={username} setUsername={setUsername}/>} />
        <Route path='/dashboard' exact element={<Dashboard username={username}/>}/>
    </Routes>
  

  </BrowserRouter>)
}

export default App;
