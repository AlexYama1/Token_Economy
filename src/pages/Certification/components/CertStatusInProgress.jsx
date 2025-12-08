import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import CertProgressCard from '../../Dashboard/components/CertProgressCard'; // Reusing visual if similar
import './CertStatusInProgress.css';

const CertStatusInProgress = () => {
    return (
        <div className="cert-in-progress">
            <div className="mb-8">
                {/* Reusing the dashboard progress card for the top timeline visual, 
            or implementing a more detailed one if needed. 
            The spec shows a similar timeline but with "Current Phase" pointer.
            For MVP, reusing or slightly modifying is efficient. 
            Let's reuse the component but wrap it or just re-implement the specific details if they differ significantly.
            Spec shows "Milestone Details" below.
        */}
                <CertProgressCard />
            </div>

            <h2 className="section-title">MILESTONE DETAILS</h2>

            <div className="milestones-grid">
                <Card className="milestone-card milestone-card--done">
                    <div className="ms-title">✓ Milestone 1: Theory Complete</div>
                    <div className="ms-date">Completed: 2025-01-15</div>
                    <div className="ms-token">Token Minted: 0.5 HTK</div>

                    <ul className="ms-reqs">
                        <li>✓ 12/12 modules</li>
                        <li>✓ All quizzes passed</li>
                    </ul>
                </Card>

                <Card className="milestone-card milestone-card--pending">
                    <div className="ms-title">○ Milestone 2: Fieldwork Verified</div>
                    <div className="ms-status">Status: Not Started</div>
                    <div className="ms-token">Token Pending: 0.5 HTK</div>

                    <ul className="ms-reqs">
                        <li>• Complete capstone</li>
                        <li>• External verification</li>
                    </ul>
                </Card>
            </div>

            <div className="next-step-section">
                <h2 className="section-title">NEXT STEP</h2>
                <Card>
                    <p className="next-step-desc">
                        Begin your fieldwork capstone project. You will work on-site under Tanaka Hiroshi's supervision for approximately 3 months.
                    </p>
                    <Button variant="primary">View Capstone Assignment</Button>
                </Card>
            </div>
        </div>
    );
};

export default CertStatusInProgress;
