import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import './BrowseMasterCard.css';

const BrowseMasterCard = ({ master }) => {
    const navigate = useNavigate();

    const formatDistance = (km) => {
        if (!km) return null;
        if (km < 100) return `${Math.round(km)} km`;
        if (km < 1000) return `${Math.round(km)} km`;
        return `${(km / 1000).toFixed(1)}k km`;
    };

    return (
        <Card className="browse-master-card">
            <div className="browse-card-header">
                <img
                    src={master.avatar}
                    alt={master.name}
                    className="browse-avatar"
                />
                {master.accepting && (
                    <span className="accepting-badge">Accepting</span>
                )}
            </div>

            <div className="browse-card-content">
                <h3 className="browse-name">{master.name}</h3>
                <div className="browse-specialty">{master.specialty}</div>
                <div className="browse-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {master.location}
                </div>

                <div className="browse-meta">
                    <div className="browse-rating">
                        <span className="star">★</span>
                        <span className="rating-value">{master.rating}</span>
                        <span className="review-count">({master.reviews})</span>
                    </div>
                    {master.distance && (
                        <div className="browse-distance">
                            {formatDistance(master.distance)} away
                        </div>
                    )}
                </div>

                <div className="browse-stats">
                    <div className="stat-item">
                        <span className="stat-label">Certified</span>
                        <span className="stat-value">{master.certified}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Category</span>
                        <span className="stat-value">{master.category}</span>
                    </div>
                </div>
            </div>

            <div className="browse-card-footer">
                <Button
                    variant="secondary"
                    className="view-profile-btn"
                    onClick={() => navigate(`/masters/${master.id}`)}
                >
                    View Profile
                </Button>
            </div>
        </Card>
    );
};

export default BrowseMasterCard;
