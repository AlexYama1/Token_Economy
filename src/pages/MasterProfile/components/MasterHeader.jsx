import React from 'react';
import Avatar from '../../../components/common/Avatar';
import './MasterHeader.css';

const MasterHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-hero">
                <Avatar src="https://placehold.co/96x96" alt="Tanaka Hiroshi" size="lg" />
                <div className="profile-info">
                    <h1 className="profile-name">Tanaka Hiroshi</h1>
                    <div className="profile-role">Temple Carpentry</div>
                    <div className="profile-loc">Kyoto, Japan</div>
                    <div className="profile-meta">
                        <span className="star">★</span> 4.8 (23 reviews) · Active since 2018
                    </div>
                </div>
            </div>

            <div className="profile-quote">
                "Preserving 400 years of Sukiya-zukuri tradition through hands-on mentorship."
            </div>
        </div>
    );
};

export default MasterHeader;
