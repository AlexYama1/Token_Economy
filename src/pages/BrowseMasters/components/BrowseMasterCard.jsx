import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/common/Card';
import Avatar from '../../../components/common/Avatar';
import Button from '../../../components/common/Button';
import './BrowseMasterCard.css';

const BrowseMasterCard = ({ master }) => {
    const navigate = useNavigate();

    return (
        <Card className="browse-master-card">
            <div className="browse-card-header">
                <Avatar src={master.avatar} alt={master.name} size="xl" className="browse-avatar" />
            </div>

            <div className="browse-card-content">
                <h3 className="browse-name">{master.name}</h3>
                <div className="browse-specialty">{master.specialty}</div>
                <div className="browse-location">{master.location}</div>

                <div className="browse-rating">
                    <span className="star">★</span> {master.rating} ({master.reviews})
                </div>

                <div className="browse-stats">
                    <div>Certified: {master.certified}</div>
                    <div className="accepting-status">
                        Accepting:
                        <span className={`status-dot ${master.accepting ? 'status-dot--on' : 'status-dot--off'}`}></span>
                        {master.accepting ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>

            <div className="browse-card-footer">
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => navigate(`/masters/${master.id}`)}
                >
                    View Profile
                </Button>
            </div>
        </Card>
    );
};

export default BrowseMasterCard;
