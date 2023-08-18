import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="pointer" onClick={() => setIsOpen(!isOpen)}>Menu</div>
            <CSSTransition 
                in={isOpen}
                timeout={300}
                classNames="nav-links"
                unmountOnExit
            >
                <div className="nav-links">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                    {/* Add other navigation links as needed */}
                </div>
            </CSSTransition>
        </nav>
    );
};

export default Navbar;
