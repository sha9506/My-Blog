import React, { useState } from "react";
import Background from "../Molecules/Background/Background";
import Users from "../DummyData/Users";


const Login=()=>
{
    const[message, setMessage]=useState("");
    const[password, setPassword]=useState();
    const[username, setUsername]=useState();

    const handleLogin=()=>
    {
       for(let i=0; i<Users.length; i++)
       {
         if(Users[i].username===username && Users[i].password===password)
         {
            setMessage("done");
         }
       }
    }

    return(<Background variant={'login'}>
        <div className="heading">
            <div className="welcome">Welcome to ...</div>
            <div className="info">and I’m have awesome anime Info!</div>
        </div>
        <div className="login-form">
            <input className="input" type="text"  name="username" placeholder="Enter Your Username" onChange={(event)=>{setUsername(event.target.value)}} />
            <input className="input" type="password" placeholder="Enter Your Password" onChange={(event)=>{setPassword(event.target.value)}} />
            <button className="login-button" onClick={handleLogin}>Login</button>
            <div className="note">
                <div className="login-note">Don’t have an account?</div>
                <div className="signup-color">Sign up</div>
            </div>
            <div>{message}</div>
        </div>
    </Background>)
}

export default Login;