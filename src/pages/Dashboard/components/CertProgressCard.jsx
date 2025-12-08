import React from 'react';
import Card from '../../../components/common/Card';
import ProgressBar from '../../../components/common/ProgressBar';
import './CertProgressCard.css';

const CertProgressCard = () => {
    return (
        <Card title="Certification Progress" className="cert-card">
            {/* Timeline */}
            <div className="timeline">
                <div className="timeline-track" />
                <div className="timeline-nodes">
                    <div className="node node--completed">
                        <div className="node-circle" />
                        <div className="node-label">Enrolled</div>
                    </div>
                    <div className="node node--current">
                        <div className="node-circle" />
                        <div className="node-label">Theory<br /><span className="node-sub">Complete</span></div>
                    </div>
                    <div className="node">
                        <div className="node-circle" />
                        <div className="node-label">Fieldwork<br /><span className="node-sub">Verified</span></div>
                    </div>
                    <div className="node">
                        <div className="node-circle" />
                        <div className="node-label">Certified</div>
                    </div>
                </div>
            </div>

            <div className="cert-stats-grid">
                <div className="cert-stat-box">
                    <div className="stat-box-title">Current Phase</div>
                    <div className="stat-box-value">THEORY</div>
                    <div className="stat-box-desc">6 of 12 modules complete</div>
                </div>
                <div className="cert-stat-box">
                    <div className="stat-box-title">Tokens Minted to Master</div>
                    <div className="stat-box-value">0.5 / 1.0</div>
                    <div className="stat-box-bar">
                        <ProgressBar value={50} />
                        <span className="stat-box-percent">50%</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CertProgressCard;
