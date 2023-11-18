import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GoPersonFill } from "react-icons/go";
import { BiSolidLock } from "react-icons/bi";
import './Login.css'

export default function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

  return (
    <div className='div'>
        <div className='box'>
            <p className='p1'>SELAMAT DATANG!!!</p>
            <p className='p2'>di Website SMAN 1 Pulau Panggung</p>
        </div><br></br>
        <form onSubmit={handleSubmit} id='form'>
            <div className='username'>
                <input type="text" name='username' id="username" placeholder="Username" value={inputs.username || ""} onChange={handleChange}></input>
                <i className='icon1'><GoPersonFill /></i>
            </div><br></br>
            <div className='password'>
                <input type="password" name='password' id="password" placeholder="Password" value={inputs.password || ""} onChange={handleChange}></input>
                <i className='icon2'><BiSolidLock /></i>
            </div><br></br>
            <div className='check'>
                <input type="checkbox" name="remember"></input>Remember Me
            </div><br></br>
            <button className='sign-in' type="submit">Sign In</button>
        </form> 
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);