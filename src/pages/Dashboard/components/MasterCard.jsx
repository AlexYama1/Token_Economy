import React from 'react';
import Card from '../../../components/common/Card';
import Avatar from '../../../components/common/Avatar';
import Button from '../../../components/common/Button';
import './MasterCard.css';

const MasterCard = () => {
    return (
        <Card title="My Master" className="master-card">
            <div className="master-card__content">
                <div className="master-info">
                    <Avatar src="https://placehold.co/64x64" alt="Tanaka Hiroshi" size="md" />
                    <div className="master-details">
                        <div className="master-name">Tanaka Hiroshi</div>
                        <div className="master-role">Temple Carpentry · Kyoto</div>
                        <div className="master-rating">★ 4.8 <span className="text-secondary">(23 reviews)</span></div>
                    </div>
                </div>

                <div className="master-stats">
                    <div className="stat-item">
                        <span className="stat-label">Students Certified</span>
                        <span className="stat-value">47</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Acceptance Rate</span>
                        <span className="stat-value">34%</span>
                    </div>
                </div>

                <div className="master-actions">
                    <Button variant="secondary" className="action-btn">Message Master</Button>
                    <Button variant="text">View Profile</Button>
                </div>
            </div>
        </Card>
    );
};

export default MasterCard;
