import { useState } from 'react';
import { GoPersonFill } from "react-icons/go";
import { BiSolidLock } from "react-icons/bi";
import axios from 'axios';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const [inputs, setInputs] = useState({});
    const [isLoading, setLoading] = useState(false);
    const URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(`${URL}/api/v1/users/login`, {
                email: inputs.username,
                password: inputs.password
            });
            Cookies.set('token', response?.data?.token);
            navigate('/dashboard');
            message.success('Login Success');
        } catch (error) {
            message.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='div-login'>
            <div className='box'>
                <p className='p1'>SELAMAT DATANG</p>
                <p className='p2'>di Website SMAN 1 Pulau Panggung</p>
            </div><br></br>
            <form onSubmit={handleSubmit} id='form'>
                <div className='username input-user'>
                    <input type="text" name='username' id="username" placeholder="Email" value={inputs.username || ""} onChange={handleChange} disabled={isLoading}></input>
                    <i className='icon1'><GoPersonFill /></i>
                </div><br></br>
                <div className='password input-user'>
                    <input type="password" name='password' id="password" placeholder="Password" value={inputs.password || ""} onChange={handleChange} disabled={isLoading}></input>
                    <i className='icon2'><BiSolidLock /></i>
                </div><br></br>
                <div className='check'>
                    <input type="checkbox" name="remember"></input>Remember Me
                </div><br></br>
                <button className='sign-in' type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Sign In'}
                </button>
            </form>
        </div>
    )
}