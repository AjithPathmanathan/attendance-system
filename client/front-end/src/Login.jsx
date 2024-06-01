import React from 'react'


function Login() {
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
                />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
            />
        </div>
        <div className="d-grid">
            <button className="btn btn-primary">Login</button>
        </div>
    </div>

</div>
  )
}

export default Login