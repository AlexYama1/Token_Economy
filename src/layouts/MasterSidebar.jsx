import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const MasterSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__logo">
                    <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 8 L20 32 M12 14 L20 8 L28 14 M12 26 L20 32 L28 26"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="logo-text">Heritage Token</span>
                </div>
            </div>

            <nav className="sidebar__nav">
                <div className="nav-section">
                    <div className="nav-section-label">PORTFOLIO</div>
                    <NavLink to="/master/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">💰</span>
                        <span className="nav-item__text">Wallet</span>
                    </NavLink>
                    <NavLink to="/master/wallet" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">📈</span>
                        <span className="nav-item__text">Portfolio Details</span>
                    </NavLink>
                </div>

                <div className="nav-section">
                    <div className="nav-section-label">TEACHING</div>
                    <NavLink to="/master/students" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">👥</span>
                        <span className="nav-item__text">My Students</span>
                    </NavLink>
                    <NavLink to="/master/curriculum" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">📚</span>
                        <span className="nav-item__text">Curriculum</span>
                    </NavLink>
                </div>

                <div className="nav-section">
                    <div className="nav-section-label">EARNINGS</div>
                    <NavLink to="/master/royalties" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">👑</span>
                        <span className="nav-item__text">Royalties</span>
                    </NavLink>
                    <NavLink to="/treasury" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">🏛️</span>
                        <span className="nav-item__text">Treasury</span>
                    </NavLink>
                </div>

                <div className="nav-section">
                    <div className="nav-section-label">ACCOUNT</div>
                    <NavLink to="/master/settings" className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}>
                        <span className="nav-item__icon">⚙️</span>
                        <span className="nav-item__text">Settings</span>
                    </NavLink>
                </div>
            </nav>

            <div className="sidebar__footer">
                <div className="wallet-card">
                    <div className="wallet-status">
                        <span className="status-dot"></span>
                        <span className="status-text">Connected</span>
                    </div>
                    <div className="wallet-address">
                        <span className="wallet-icon">🦊</span>
                        <span className="address-text">0x1a2b...3c4d</span>
                        <button className="copy-btn" title="Copy address">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16,17 21,12 16,7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span>Disconnect Wallet</span>
                </button>

                <NavLink to="/dashboard" className="switch-view-link">
                    <span>← Switch to Apprentice View</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default MasterSidebar;
