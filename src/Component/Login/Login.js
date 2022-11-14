import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Login/Login.css';
import { auth } from '../firebase';

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG7.png' alt='amazon-logo' />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email (phone for mobile accounts)</h5>
                    <input type='text' placeholder='enter email/phone no.' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' placeholder='enter a password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign-In</button>
                    <p>By continuing, you agree to Amazon's <span style={{ color: 'blue' }}> Conditions of Use</span> and <span style={{ color: 'blue' }}>Privacy Notice</span></p>
                </form>
                <div className='info'>
                    <input type='checkbox' /> &nbsp;
                    <p> Keep me signed in. <span style={{ color: 'blue' }}>Details</span></p>
                </div>
                <button type='submit' onClick={register} className='login_registerButton'>Create Your Amazon account</button>
            </div>
        </div>
    )
}
