import React, { useState } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

const App=()=>
{
  const[pageNumber, setPageNumber]= useState(1);
  const[username, setUsername]=useState("");

  return(<div>
   { 
      pageNumber===0? <Login setPageNumber={setPageNumber} username={username} setUsername={setUsername}/> : null
   }
   {
      pageNumber===1? <Dashboard setPageNumber={setPageNumber} username={username}/> : null
   }

    
    </div>)
}

export default App;
