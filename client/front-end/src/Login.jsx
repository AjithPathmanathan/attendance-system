import React from 'react'
import { useState } from 'react';
import axios from 'axios';




function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', {
                username,
                password
            });

            localStorage.setItem('token', response.data.token);
            
        } catch (error) {
            setError('Invalid username or password');
        }
    };
  return (
     <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="card p-4" style={{ width: '400px', backgroundColor: '#2c2c2c', color: '#ffffff' }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                        onChange={(e) => setPassword(e.target.value)}
            />
             {error && <div className="alert alert-danger" role="alert">{error}</div>}
        </div>
        <div className="d-grid">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    </div>

</div>
  )
}

export default Login