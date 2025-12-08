import React from 'react';
import Card from '../../../components/common/Card';
import './CommitmentCard.css';

const CommitmentCard = () => {
    return (
        <Card title="My Commitment" className="commitment-card">
            <div className="commitment-stats">
                <div className="stat-col">
                    <div className="stat-label">Staked</div>
                    <div className="stat-value">500 HTK</div>
                </div>
                <div className="stat-col">
                    <div className="stat-label">Enrollment Date</div>
                    <div className="stat-value">2024-09-15</div>
                </div>
                <div className="stat-col">
                    <div className="stat-label">Est. Completion</div>
                    <div className="stat-value">2025-06-30</div>
                </div>
            </div>

            <div className="commitment-info">
                <p className="info-title">Upon certification, you will:</p>
                <ul className="info-list">
                    <li>• Receive a Mastery NFT (Soulbound Token)</li>
                    <li>• Gain verified status on the blockchain</li>
                    <li>• Contribute 3% Guild Tax on heritage income</li>
                </ul>
            </div>
        </Card>
    );
};

export default CommitmentCard;
