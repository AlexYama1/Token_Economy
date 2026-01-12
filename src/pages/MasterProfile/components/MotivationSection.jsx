import React from 'react';
import Card from '../../../components/common/Card';
import './MotivationSection.css';

const MotivationSection = () => {
    return (
        <div className="motivation-section">
            <h2 className="section-title">ABOUT ME & MY MOTIVATION</h2>

            <Card className="motivation-card">
                <div className="motivation-content">
                    <div className="motivation-intro">
                        <p>
                            I am a third-generation temple carpenter from Kyoto, carrying forward 400 years of
                            <strong> Sukiya-zukuri</strong> tradition. My grandfather built the restoration of
                            Kinkaku-ji's tea house, and my father worked on numerous temple renovations across Kansai region.
                        </p>
                    </div>

                    <div className="motivation-why">
                        <h3 className="motivation-subtitle">Why I Teach</h3>
                        <blockquote className="motivation-quote">
                            "Traditional craftsmanship isn't just about technique—it's about understanding the soul of wood,
                            respecting materials, and connecting with centuries of wisdom. I teach because I believe this
                            knowledge must live on through dedicated apprentices, not just preserved in museums."
                        </blockquote>
                    </div>

                    <div className="motivation-values">
                        <h3 className="motivation-subtitle">My Teaching Philosophy</h3>
                        <div className="values-grid">
                            <div className="value-item">
                                <span className="value-icon">🎯</span>
                                <div className="value-content">
                                    <strong>Patience First</strong>
                                    <p>Mastery takes years, not months. I focus on building strong foundations before advanced techniques.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🌳</span>
                                <div className="value-content">
                                    <strong>Learn from Nature</strong>
                                    <p>Understanding how trees grow is as important as knowing how to cut them.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🔨</span>
                                <div className="value-content">
                                    <strong>Hands-On Practice</strong>
                                    <p>Theory is important, but real learning happens when your hands touch the wood.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MotivationSection;
