import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Login">Login</Link>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default Navbar;