import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have a CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/market">Market</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/strategy-log">Strategy Log</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;