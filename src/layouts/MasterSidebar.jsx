import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Reusing same CSS file but maybe we can share styles. 
// For now, I'll just reuse the class names but structure specifically for Master.

const MasterSidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                Heritage Token
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/master/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">●</span> Wallet
                </NavLink>
                <NavLink to="/master/students" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">○</span> My Students
                </NavLink>
                <NavLink to="/master/curriculum" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">○</span> Curriculum
                </NavLink>
                <NavLink to="/master/royalties" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">○</span> Royalties
                </NavLink>
                <NavLink to="/treasury" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">○</span> Treasury
                </NavLink>
                <NavLink to="/master/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="nav-icon">○</span> Settings
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <div className="connection-status">CONNECTED</div>
                <div className="wallet-info">
                    <span className="wallet-icon">🦊</span>
                    <span className="wallet-addr">0x1a2b...3c4d</span>
                    <button className="copy-btn">[⧉]</button>
                </div>
                <button className="disconnect-btn">[Disconnect Wallet]</button>
            </div>
        </aside>
    );
};

export default MasterSidebar;
