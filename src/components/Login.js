import React from 'react';
import '../css/Login.css';

function Login() {
    return (
        <div className="class">
            <br/>
            <h1>Login Form</h1>
            <div className="box">
            <h3>Assignment Week 3</h3>
                <br/>
                <div className="bardiv">
                    <p>Username</p>
                    <input type="text" placeholder="Input your username ..." />
                </div>
                <br/>
                <div className="bardiv">
                    <p>Password</p>
                    <input type="text" placeholder="Input your password ..." />
                </div>
                <div className="bardiv">
                    <button className='login'> Login </button>
                </div>
                <div className="bardiv-check">
                    <input type="checkbox" name="checkbox"/>
                    <p>Remember Me</p>
                </div>
                <br/>
                <div className="bardiv">
                    <button className="cancel">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;