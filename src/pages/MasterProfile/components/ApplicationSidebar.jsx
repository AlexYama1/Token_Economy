import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import './ApplicationSidebar.css';

const ApplicationSidebar = () => {
    return (
        <Card title="Apply to this Master" className="app-sidebar sticky-sidebar">
            <div className="app-status">
                <div className="status-label">Status</div>
                <div className="status-indicator">
                    <span className="dot dot--green"></span> Accepting Applications
                </div>
            </div>

            <div className="divider" />

            <div className="app-reqs">
                <div className="req-title">Requirements</div>
                <ul className="req-list">
                    <li>• Minimum stake: 500 HTK</li>
                    <li>• Application essay</li>
                    <li>• Portfolio (if applicable)</li>
                </ul>
            </div>

            <div className="divider" />

            <div className="app-stats">
                <div className="stats-header">Statistics</div>
                <div className="stat-row">
                    <span>Students Certified</span>
                    <span className="stat-bold">47</span>
                </div>
                <div className="stat-row">
                    <span>Current Apprentices</span>
                    <span className="stat-bold">8</span>
                </div>
                <div className="stat-row">
                    <span>Acceptance Rate</span>
                    <span className="stat-bold">34%</span>
                </div>
                <div className="stat-row">
                    <span>Avg. Completion</span>
                    <span className="stat-bold">14 mo</span>
                </div>
            </div>

            <div className="divider" />

            <Button variant="primary" className="w-full">Apply Now</Button>
            <div className="app-note">Applications reviewed monthly</div>
        </Card>
    );
};

export default ApplicationSidebar;
