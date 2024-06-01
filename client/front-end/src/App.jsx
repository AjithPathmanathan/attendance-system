import { Home } from "./Home"
import Login from "./Login"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    
     <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Login/>} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    
  )
}

export default App
