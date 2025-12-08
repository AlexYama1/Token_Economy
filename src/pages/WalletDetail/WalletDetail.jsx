import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './WalletDetail.css';

const WalletDetail = () => {
    return (
        <div className="wallet-detail-page">
            {/* Section A: Portfolio Header with Advanced Chart */}
            <h1 className="wd-title">PORTFOLIO</h1>
            <Card className="wd-chart-card">
                <div className="wd-stats-row">
                    <div className="wd-stat-item">
                        <div className="wd-label">Total Value</div>
                        <div className="wd-val">¥4,582,400</div>
                        <div className="wd-sub text-success">+¥508,200 (+12.4%) past year</div>
                    </div>
                    <div className="wd-stat-item">
                        <div className="wd-label">Token Holdings</div>
                        <div className="wd-val">47.00 HTK</div>
                        <div className="wd-sub">2.34% of total supply</div>
                    </div>
                </div>

                <div className="wd-chart-tabs">
                    <button className="wd-tab active">Value (¥)</button>
                    <button className="wd-tab">Token Price</button>
                    <button className="wd-tab">Holdings</button>
                </div>

                <div className="wd-chart-area">
                    {/* Advanced SVG Chart Placeholder */}
                    <svg width="100%" height="300" viewBox="0 0 800 300" preserveAspectRatio="none">
                        {/* Grid */}
                        <line x1="0" y1="250" x2="800" y2="250" stroke="#E0E0E0" strokeDasharray="4" />
                        <line x1="0" y1="150" x2="800" y2="150" stroke="#E0E0E0" strokeDasharray="4" />
                        <line x1="0" y1="50" x2="800" y2="50" stroke="#E0E0E0" strokeDasharray="4" />

                        {/* Line */}
                        <path d="M0,250 C200,240 400,100 600,80 S800,20" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
                        {/* Area */}
                        <path d="M0,250 C200,240 400,100 600,80 S800,20 V300 H0 Z" fill="var(--color-chart-area)" stroke="none" />

                        {/* Hover Tooltip Mockup */}
                        <circle cx="600" cy="80" r="6" fill="var(--color-primary)" stroke="#FFF" strokeWidth="2" />
                        <line x1="600" y1="0" x2="600" y2="300" stroke="var(--color-primary)" strokeDasharray="4" opacity="0.5" />
                    </svg>

                    <Card className="chart-tooltip-mock" style={{ position: 'absolute', top: '80px', left: '620px' }}>
                        <div className="ct-date">Aug 15, 2025</div>
                        <div className="ct-row">Value: <strong>¥4,582,400</strong></div>
                        <div className="ct-row">Tokens: 47.00 HTK</div>
                        <div className="ct-row">Price: ¥97,498/HTK</div>
                    </Card>
                </div>

                <div className="wd-controls">
                    <div className="time-toggles">
                        <button className="toggle-btn">1D</button>
                        <button className="toggle-btn">1W</button>
                        <button className="toggle-btn">1M</button>
                        <button className="toggle-btn">3M</button>
                        <button className="toggle-btn active">1Y</button>
                        <button className="toggle-btn">ALL</button>
                    </div>
                    <Button variant="secondary">Compare to: Treasury (W) ▼</Button>
                </div>
            </Card>

            {/* Section B: Holdings Breakdown */}
            <div className="holdings-section">
                <h2 className="hs-title">HOLDINGS BREAKDOWN</h2>

                <Card className="breakdown-card">
                    <div className="bd-row">
                        <div className="bd-info">
                            <div className="bd-name">From Certified Students</div>
                            <div className="bd-bar-bg"><div className="bd-bar-fill" style={{ width: '97.9%' }}></div></div>
                        </div>
                        <div className="bd-val">46.0 HTK</div>
                        <div className="bd-pct">97.9%</div>
                    </div>
                    <div className="bd-row">
                        <div className="bd-info">
                            <div className="bd-name">Pending (Theory Complete, Fieldwork in Progress)</div>
                            <div className="bd-bar-bg"><div className="bd-bar-fill warn" style={{ width: '2.1%' }}></div></div>
                        </div>
                        <div className="bd-val">1.0 HTK</div>
                        <div className="bd-pct">2.1%</div>
                    </div>
                </Card>
            </div>

            {/* Section C: Wealth Explainer */}
            <div className="explainer-section">
                <div className="exp-header">
                    <h2 className="hs-title">HOW YOUR WEALTH IS CALCULATED</h2>
                    <Button variant="text">[?] info</Button>
                </div>
                <Card className="formula-card">
                    <div className="formula-box">
                        Wᵢ  =  ( nᵢ / N )  ×  W
                    </div>
                    <div className="formula-calc">
                        ¥4,582,400 = (47 / 2,008) × ¥195,680,000
                    </div>

                    <div className="var-grid">
                        <div className="var-card">
                            <div className="var-title">Your Tokens</div>
                            <div className="var-val">nᵢ = 47</div>
                            <div className="var-sub">+2 pending</div>
                        </div>
                        <div className="var-card">
                            <div className="var-title">Total Pool</div>
                            <div className="var-val">N = 2,008</div>
                            <div className="var-sub">+34 pending</div>
                        </div>
                        <div className="var-card">
                            <div className="var-title">Treasury</div>
                            <div className="var-val">W = ¥195.7M</div>
                            <div className="var-sub">+¥2.1M MTD</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default WalletDetail;
