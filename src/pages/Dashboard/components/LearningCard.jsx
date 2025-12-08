import React from 'react';
import Card from '../../../components/common/Card';
import ProgressBar from '../../../components/common/ProgressBar';
import Button from '../../../components/common/Button';
import './LearningCard.css';

const LearningCard = () => {
    return (
        <Card title="Continue Learning" className="learning-card">
            <div className="learning-content">
                <h4 className="module-title">Module 6: Joinery Fundamentals</h4>

                <div className="learning-progress">
                    <ProgressBar value={45} className="mb-2" />
                    <div className="progress-text">45% complete</div>
                </div>

                <div className="next-lesson">
                    Next: Lesson 6.3 — Mortise and Tenon Joints
                </div>

                <Button variant="primary" className="resume-btn">Resume Lesson →</Button>
            </div>
        </Card>
    );
};

export default LearningCard;
