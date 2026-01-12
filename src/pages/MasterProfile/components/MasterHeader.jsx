import React from 'react';
import './MasterHeader.css';

const MasterHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-hero">
                <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                    alt="Tanaka Hiroshi"
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <div className="profile-badges">
                        <span className="badge badge-verified">✓ Verified Master</span>
                        <span className="badge badge-accepting">Accepting Students</span>
                    </div>
                    <h1 className="profile-name">Tanaka Hiroshi</h1>
                    <div className="profile-role">Temple Carpentry · Sukiya-zukuri Specialist</div>
                    <div className="profile-loc">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Kyoto, Japan
                    </div>
                    <div className="profile-meta">
                        <div className="meta-item">
                            <span className="star">★</span>
                            <span className="meta-value">4.95</span>
                            <span className="meta-label">(67 reviews)</span>
                        </div>
                        <div className="meta-divider">·</div>
                        <div className="meta-item">
                            <span className="meta-value">47</span>
                            <span className="meta-label">students certified</span>
                        </div>
                        <div className="meta-divider">·</div>
                        <div className="meta-item">
                            <span className="meta-label">Active since</span>
                            <span className="meta-value">2018</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-quote">
                <blockquote>
                    "Preserving 400 years of Sukiya-zukuri tradition through hands-on mentorship.
                    Every student who learns these techniques carries forward our ancestors' wisdom."
                </blockquote>
            </div>
        </div>
    );
};

export default MasterHeader;
