import React from 'react';
import './App.css';
import Jones from './Jones.png'; // Import your logo image file

function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={Jones} alt="Logo" className="logo" /> 
        
      </div>
      <ul className='nav-links'>
        <li>About</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
}

export default Nav;
