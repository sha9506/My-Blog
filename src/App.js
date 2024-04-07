import React, { useState } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

const App=()=>
{
  const[pageNumber, setPageNumber]= useState(0);

  return(<div>
   { 
      pageNumber===0? <Login setPageNumber={setPageNumber}/> : null
   }
   {
      pageNumber===1? <Dashboard/> : null
   }

    
    </div>)
}

export default App;
