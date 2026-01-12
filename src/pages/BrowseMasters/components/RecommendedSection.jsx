import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendedSection.css';

const RecommendedSection = ({ masters }) => {
    const navigate = useNavigate();

    if (!masters || masters.length === 0) return null;

    return (
        <div className="recommended-section">
            <div className="recommended-header">
                <h2 className="recommended-title">
                    <span className="recommended-icon">✨</span>
                    Recommended for You
                </h2>
                <p className="recommended-subtitle">Top-rated masters currently accepting new students</p>
            </div>

            <div className="recommended-scroll">
                {masters.map(master => (
                    <div
                        key={master.id}
                        className="recommended-card"
                        onClick={() => navigate(`/masters/${master.id}`)}
                    >
                        <div className="rec-card-badge">Featured</div>
                        <img
                            src={master.avatar}
                            alt={master.name}
                            className="rec-avatar"
                        />
                        <div className="rec-info">
                            <h3 className="rec-name">{master.name}</h3>
                            <p className="rec-specialty">{master.specialty}</p>
                            <p className="rec-location">{master.location}</p>
                            <div className="rec-rating">
                                <span className="rec-star">★</span>
                                <span className="rec-rating-value">{master.rating}</span>
                                <span className="rec-reviews">({master.reviews} reviews)</span>
                            </div>
                        </div>
                        <button className="rec-view-btn">View Profile →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedSection;
