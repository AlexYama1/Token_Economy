import React from 'react';
import './CurriculumTree.css';

const CurriculumTree = () => {
    return (
        <div className="curriculum-tree">
            <div className="section-header">
                <h2 className="section-title">CURRICULUM</h2>
                <span className="section-meta">12 modules</span>
            </div>

            <div className="phase-node">
                <div className="phase-header">
                    <span className="phase-title">Phase 1: Theory (Online)</span>
                    <span className="phase-duration">~6 months</span>
                </div>
                <div className="modules-list">
                    <div className="module-item">├─ Module 1: History of Japanese Temple Architecture</div>
                    <div className="module-item">├─ Module 2: Wood Selection and Properties</div>
                    <div className="module-item">├─ Module 3: Traditional Tools and Maintenance</div>
                    <div className="module-item">├─ Module 4: Joinery Fundamentals</div>
                    <div className="module-item">├─ Module 5: Structural Principles</div>
                    <div className="module-item">├─ Module 6: Decorative Elements</div>
                    <div className="module-item">└─ ... 4 more modules</div>
                </div>
            </div>

            <div className="phase-node">
                <div className="phase-header">
                    <span className="phase-title">Phase 2: Fieldwork (In-person)</span>
                    <span className="phase-duration">~3 months</span>
                </div>
                <div className="modules-list">
                    <div className="module-item">└─ Capstone: Restoration project under Master supervision</div>
                    <div className="module-verifier">Verified by: Kyoto Cultural Heritage Foundation</div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumTree;
