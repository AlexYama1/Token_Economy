import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__logo">[Logo] Heritage Token</div>
            </div>

            <nav className="sidebar__nav">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
                >
                    <span className="nav-item__icon">●</span> Dashboard
                </NavLink>
                <NavLink
                    to="/masters"
                    className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
                >
                    <span className="nav-item__icon">○</span> Browse Masters
                </NavLink>
                <NavLink
                    to="/curriculum"
                    className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
                >
                    <span className="nav-item__icon">○</span> My Curriculum
                </NavLink>
                <NavLink
                    to="/certification"
                    className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
                >
                    <span className="nav-item__icon">○</span> Certification
                </NavLink>
            </nav>

            <div className="sidebar__footer">
                <div className="wallet-info">
                    <div className="wallet-address">[Wallet: 0x1a2b...3c4d]</div>
                    <button className="disconnect-btn">[Disconnect]</button>
                </div>
                <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <NavLink to="/master/dashboard" style={{ color: '#888', textDecoration: 'none', fontSize: '0.8rem' }}>
                        → Switch to Master View
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
