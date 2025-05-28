// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
    <div>
        <h1>Login Page</h1>
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
        <Link to="/options">Go to Game Options</Link>
    </div>
);

export default LoginPage;
