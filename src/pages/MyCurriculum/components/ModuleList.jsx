import React from 'react';
import './ModuleList.css';

const ModuleList = () => {
    return (
        <div className="module-list">
            <div className="module-list-header">
                <h2 className="curr-title">MY CURRICULUM</h2>
                <div className="curr-subtitle">Temple Carpentry</div>
            </div>

            <div className="phase-group">
                <div className="phase-label">PHASE 1: THEORY</div>

                <div className="module-item module-item--completed">
                    <span className="check-icon">✓</span> Module 1: History
                </div>
                <div className="module-item module-item--completed">
                    <span className="check-icon">✓</span> Module 2: Wood Selection
                </div>
                <div className="module-item module-item--completed">
                    <span className="check-icon">✓</span> Module 3: Tools
                </div>
                <div className="module-item module-item--completed">
                    <span className="check-icon">✓</span> Module 4: Joinery Fund...
                </div>
                <div className="module-item module-item--completed">
                    <span className="check-icon">✓</span> Module 5: Structural
                </div>

                <div className="module-item module-item--active">
                    <span className="active-dot">●</span> Module 6: Decorative
                    <span className="active-arrow">→</span>
                </div>

                <div className="module-item module-item--locked">
                    <span className="lock-icon">○</span> Module 7: Preservation
                </div>
                <div className="module-item module-item--locked">
                    <span className="lock-icon">○</span> Module 8: Advanced Joinery
                </div>
                {/* ... */}
            </div>

            <div className="phase-group">
                <div className="phase-label">PHASE 2: FIELDWORK</div>
                <div className="module-item module-item--locked">
                    <span className="lock-icon">🔒</span> Capstone Project
                </div>
            </div>

            <div className="curr-footer">
                <div className="progress-label">Progress: 54%</div>
                <div className="mini-progress-track">
                    <div className="mini-progress-fill" style={{ width: '54%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ModuleList;
