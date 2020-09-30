import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    }
  
    return (
      <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to='/'>ProRate</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Professions</h3>
          <button className="sidebar-close" onClick={closeMenu}>x</button>
          <ul>
            <li><a href="index.html">Lawyers</a></li>
            <li><a href="index.html">Plumbers</a></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path='/' exact={true} component={HomePage} />
          </div>
        </main>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
      </BrowserRouter>
  );
}

export default App;
