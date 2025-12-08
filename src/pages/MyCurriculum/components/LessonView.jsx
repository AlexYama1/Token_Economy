import React from 'react';
import Button from '../../../components/common/Button';
import './LessonView.css';

const LessonView = () => {
    return (
        <div className="lesson-view">
            {/* Module Header */}
            <div className="lesson-header">
                <div className="lh-top">
                    <h1 className="lh-title">Module 6: Decorative Elements</h1>
                    <div className="lh-progress-text">4 of 8 lessons complete</div>
                </div>
                <div className="lh-dots">
                    {/* Mocking dots: 1-4 done, 5 current, 6-8 pending */}
                    <span className="dot dot--done">1</span>
                    <span className="dot dot--done">2</span>
                    <span className="dot dot--done">3</span>
                    <span className="dot dot--done">4</span>
                    <span className="dot dot--current">5</span>
                    <span className="dot dot--pending">6</span>
                    <span className="dot dot--pending">7</span>
                    <span className="dot dot--pending">8</span>
                </div>
            </div>

            {/* Lesson Content Body */}
            <div className="lesson-body">
                <h2 className="lesson-title">Lesson 6.5: Ranma Transom Carvings</h2>

                <div className="video-player-placeholder">
                    <div className="play-icon">▶</div>
                    VIDEO PLAYER (16:9)
                </div>

                <div className="lesson-text">
                    <p>
                        Ranma (欄間) are decorative wooden transoms placed above sliding doors or between rooms.
                        In temple architecture, they serve both aesthetic and functional purposes, allowing for air circulation
                        and light while dividing spaces.
                    </p>
                    <p>
                        In this lesson, we will explore the three main techniques: <em>Sukashi-bori</em> (openwork),
                        <em>Ukibori</em> (relief carving), and the complex multi-layered styles found in Zen temples.
                    </p>
                </div>

                <Button variant="text" className="transcript-btn">[Read full transcript]</Button>

                <div className="lesson-divider" />

                <div className="resources-section">
                    <h3 className="res-title">RESOURCES</h3>
                    <div className="res-item">📄 Ranma Pattern Templates (PDF)</div>
                    <div className="res-item">📄 Carving Tool Guide</div>
                </div>

                <div className="lesson-divider" />

                <div className="lesson-actions">
                    <Button variant="secondary">← Previous Lesson</Button>
                    <Button variant="primary">Mark Complete →</Button>
                </div>
            </div>
        </div>
    );
};

export default LessonView;
