import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div>
         <div className="vh-100 bg-dark text-white">
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
        <h1>Welcome to the Home Page</h1>
        <button  className="btn btn-danger">Logout</button>
    </header>
    <main className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 80px)' }}>
        <h2>Hello, User!</h2>
    </main>
</div>
</div>
  )
}
