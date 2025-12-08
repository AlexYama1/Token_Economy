import React from 'react';
import WelcomeHeader from './components/WelcomeHeader';
import CertProgressCard from './components/CertProgressCard';
import MasterCard from './components/MasterCard';
import LearningCard from './components/LearningCard';
import CommitmentCard from './components/CommitmentCard';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <SectionA />

            <div className="dashboard-grid">
                <div className="grid-item--full">
                    <CertProgressCard />
                </div>

                <div className="grid-item--half">
                    <MasterCard />
                </div>

                <div className="grid-item--half">
                    <LearningCard />
                </div>

                <div className="grid-item--full">
                    <CommitmentCard />
                </div>
            </div>
        </div>
    );
};

const SectionA = () => (
    <WelcomeHeader name="Alex" role="Apprentice · Temple Carpentry" />
);

export default Dashboard;
