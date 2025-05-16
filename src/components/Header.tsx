import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">yfactory GmbH</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/impressum.html">Impressum</Link></li>
                    <li><Link to="/datenschutz.html">Datenschutz</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;