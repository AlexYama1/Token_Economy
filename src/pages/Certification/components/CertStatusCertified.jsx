import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import './CertStatusCertified.css';

const CertStatusCertified = () => {
    return (
        <div className="cert-certified">
            <div className="nft-container">
                <div className="nft-card-visual">
                    <div className="nft-content">
                        <div className="nft-title">MASTERY NFT</div>
                        <div className="nft-subtitle">Temple Carpentry</div>
                        <div className="nft-seal">[Seal]</div>
                        <div className="nft-details">
                            <div>Awarded to: Alex</div>
                            <div>Master: Tanaka Hiroshi</div>
                            <div>Verified: 2025-06-30</div>
                            <div>Token ID: #1847</div>
                        </div>
                    </div>
                </div>
                <div className="nft-actions">
                    <Button variant="secondary">View on Blockchain</Button>
                    <Button variant="secondary">Download Certificate</Button>
                </div>
            </div>

            <div className="license-status-section">
                <h2 className="section-title">LICENSE STATUS</h2>
                <Card className="license-card">
                    <div className="license-header">
                        <span>Status: ACTIVE</span>
                        <span className="status-badge-green">● Green</span>
                    </div>

                    <div className="license-stats">
                        <div className="ls-row">
                            <span>Guild Tax Rate</span>
                            <span className="ls-val">3%</span>
                        </div>
                        <div className="ls-row">
                            <span>Contributions YTD</span>
                            <span className="ls-val">¥45,000</span>
                        </div>
                        <div className="ls-row">
                            <span>Next Payment Due</span>
                            <span className="ls-val">2025-03-01</span>
                        </div>
                    </div>

                    <div className="license-actions">
                        <Button variant="text">View Payment History</Button>
                        <Button variant="text">Update Tax Rate</Button>
                    </div>
                </Card>
            </div>

            <div className="career-section">
                <h2 className="section-title">CAREER PATHWAYS</h2>
                <div className="career-grid">
                    <Card className="career-card">
                        <h3 className="career-title">🔨 Find Work</h3>
                        <p className="career-desc">
                            Your verified credential qualifies you for heritage restoration projects.
                        </p>
                        <Button variant="secondary">Browse Opportunities</Button>
                    </Card>

                    <Card className="career-card">
                        <h3 className="career-title">🎓 Become a Master</h3>
                        <p className="career-desc">
                            After 5+ years of practice, you may apply to teach your own apprentices.
                        </p>
                        <Button variant="secondary">Learn Requirements</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CertStatusCertified;
