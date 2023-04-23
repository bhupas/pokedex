import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Components/Main';
import './Components/style.css';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: '#333', color: '#fff' }}>
          <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: 18 }}>Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: 18 }}>About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
