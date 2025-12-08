import React from 'react';
import MasterHeader from './components/MasterHeader';
import CurriculumTree from './components/CurriculumTree';
import ReviewSection from './components/ReviewSection';
import ApplicationSidebar from './components/ApplicationSidebar';
import './MasterProfile.css';

const MasterProfile = () => {
    return (
        <div className="master-profile-container">
            <div className="profile-left-col">
                <MasterHeader />
                <CurriculumTree />
                <ReviewSection />
            </div>

            <div className="profile-right-col">
                <ApplicationSidebar />
            </div>
        </div>
    );
};

export default MasterProfile;
