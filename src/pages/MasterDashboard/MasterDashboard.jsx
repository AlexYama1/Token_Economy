import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import LiquidationModal from './components/LiquidationModal';
import './MasterDashboard.css';

const MasterDashboard = () => {
    const [showLiquidationModal, setShowLiquidationModal] = useState(false);

    return (
        <div className="master-dashboard">
            {/* Section A: Welcome Header */}
            <div className="md-header">
                <div>
                    <h1 className="md-welcome">Welcome back, Tanaka-sensei</h1>
                    <div className="md-role">Master · Temple Carpentry · Kyoto</div>
                </div>
                <Button variant="primary">+ Add Student</Button>
            </div>

            {/* Section B: Portfolio Value Card (Hero) */}
            <Card className="portfolio-hero">
                <div className="ph-top">
                    <div className="ph-title">TOTAL PORTFOLIO VALUE</div>
                    <div className="ph-val-row">
                        <span className="ph-value">¥4,582,400</span>
                        <span className="ph-badge-up">+12.4% ▲</span>
                    </div>
                    <div className="ph-sub">≈ 47.00 HTK × ¥97,498/token</div>
                </div>

                <div className="ph-chart-placeholder">
                    {/* SVG Chart Placeholder */}
                    <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <path d="M0,180 C100,150 200,180 300,100 S500,0 800,50" fill="none" stroke="var(--color-chart-line)" strokeWidth="3" />
                        <path d="M0,180 C100,150 200,180 300,100 S500,0 800,50 V200 H0 Z" fill="var(--color-chart-area)" stroke="none" />
                    </svg>
                </div>

                <div className="ph-controls">
                    <div className="time-toggles">
                        <button className="toggle-btn">1D</button>
                        <button className="toggle-btn">1W</button>
                        <button className="toggle-btn">1M</button>
                        <button className="toggle-btn">3M</button>
                        <button className="toggle-btn active">1Y</button>
                        <button className="toggle-btn">ALL</button>
                    </div>
                    <button
                        className="liquidate-btn"
                        onClick={() => setShowLiquidationModal(true)}
                    >
                        💰 Liquidate Tokens
                    </button>
                </div>
            </Card>

            {/* Section C: Key Metrics Row */}
            <div className="metrics-grid">
                <Card className="metric-card">
                    <div className="mc-label">TOKEN HOLDINGS</div>
                    <div className="mc-val">47.00 HTK</div>
                    <div className="mc-sub">nᵢ = 47 students</div>
                </Card>
                <Card className="metric-card">
                    <div className="mc-label">OWNERSHIP SHARE</div>
                    <div className="mc-val">2.34%</div>
                    <div className="mc-sub">of total pool</div>
                </Card>
                <Card className="metric-card">
                    <div className="mc-label">TOKEN PRICE</div>
                    <div className="mc-val">¥97,498</div>
                    <div className="mc-sub">W ÷ N</div>
                </Card>
                <Card className="metric-card">
                    <div className="mc-label">24H CHANGE</div>
                    <div className="mc-val text-success">+¥4,280</div>
                    <div className="mc-sub text-success">+4.6% ▲</div>
                </Card>
            </div>

            {/* Section D: Token Activity */}
            <div className="activity-section">
                <div className="sec-header">
                    <h3 className="sec-title">RECENT TOKEN ACTIVITY</h3>
                    <Button variant="text">View All →</Button>
                </div>
                <div className="activity-list">
                    <div className="act-row">
                        <div className="act-icon icon-success">●</div>
                        <div className="act-details">
                            <div className="act-main">Token Minted</div>
                            <div className="act-sub">Milestone: Theory Complete</div>
                            <div className="act-sub">Student: Yamamoto Kenji</div>
                        </div>
                        <div className="act-right">
                            <div className="act-amount">+0.5 HTK</div>
                            <div className="act-time">2 hours ago</div>
                        </div>
                    </div>
                    <div className="act-row">
                        <div className="act-icon icon-accent">◆</div>
                        <div className="act-details">
                            <div className="act-main">Royalty Received</div>
                            <div className="act-sub">Source: Internal Royalty (10%)</div>
                            <div className="act-sub">From: Nakamura Yuki</div>
                        </div>
                        <div className="act-right">
                            <div className="act-amount">+¥12,400</div>
                            <div className="act-time">1 week ago</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Liquidation Modal */}
            {showLiquidationModal && (
                <LiquidationModal
                    onClose={() => setShowLiquidationModal(false)}
                    tokenAmount={47}
                    tokenValue={4582400}
                />
            )}
        </div>
    );
};

export default MasterDashboard;
