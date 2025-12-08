import React from 'react';
import Card from '../../components/common/Card';
import './Treasury.css';

const Treasury = () => {
    return (
        <div className="treasury-page">
            {/* Section A: Treasury Overview */}
            <div className="treasury-header">
                <div>
                    <h1 className="t-title">HERITAGE TOKEN TREASURY</h1>
                    <div className="t-sub">Public dashboard · Updated in real-time</div>
                </div>
            </div>

            <div className="t-stats-grid">
                <Card className="t-stat">
                    <div className="ts-label">TOTAL TREASURY VALUE (W)</div>
                    <div className="ts-val">¥195,680,000</div>
                    <div className="ts-meta text-success">+¥12.4M this year</div>
                </Card>
                <Card className="t-stat">
                    <div className="ts-label">TOTAL TOKENS (N)</div>
                    <div className="ts-val">2,008</div>
                    <div className="ts-meta text-success">+127 this year</div>
                </Card>
                <Card className="t-stat">
                    <div className="ts-label">TOKEN PRICE (W ÷ N)</div>
                    <div className="ts-val">¥97,498</div>
                    <div className="ts-meta text-success">+¥8,240 (+9.2%) YTD</div>
                </Card>
            </div>

            {/* Section B: Composition */}
            <div className="t-section">
                <h2 className="t-sec-title">TREASURY COMPOSITION</h2>
                <Card className="composition-card">
                    <div className="comp-layout">
                        <div className="donut-chart-container">
                            {/* CSS Conic Gradient Donut Chart */}
                            <div className="donut-chart" style={{
                                background: `conic-gradient(
                      var(--color-primary) 0% 45%, 
                      var(--color-accent) 45% 75%, 
                      #2E7D32 75% 95%, 
                      #9C27B0 95% 100%
                    )`
                            }}>
                                <div className="donut-hole">
                                    <div className="dc-center-label">Total<br />¥195M</div>
                                </div>
                            </div>
                        </div>

                        <div className="comp-legend">
                            <div className="legend-item">
                                <div className="li-bar" style={{ width: '100%', backgroundColor: 'var(--color-primary)' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Government Subsidies</span>
                                    <span className="li-val">¥88,056,000 (45%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-bar" style={{ width: '66%', backgroundColor: 'var(--color-accent)' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Guild Tax Revenue</span>
                                    <span className="li-val">¥58,704,000 (30%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-bar" style={{ width: '44%', backgroundColor: '#2E7D32' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Internal Royalties</span>
                                    <span className="li-val">¥39,136,000 (20%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-bar" style={{ width: '11%', backgroundColor: '#9C27B0' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Impact Investors</span>
                                    <span className="li-val">¥9,784,000 (5%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Section C: Growth Chart */}
            <div className="t-section">
                <h2 className="t-sec-title">TREASURY GROWTH</h2>
                <Card className="growth-chart-card">
                    {/* Mocking SVG Line Chart */}
                    <div className="growth-chart-placeholder">
                        <svg width="100%" height="250" viewBox="0 0 800 250" preserveAspectRatio="none">
                            {/* Grid Lines */}
                            <line x1="0" y1="200" x2="800" y2="200" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="150" x2="800" y2="150" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="100" x2="800" y2="100" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="50" x2="800" y2="50" stroke="#E0E0E0" strokeDasharray="4" />

                            {/* Treasury Line (Solid) */}
                            <path d="M0,200 C100,190 200,160 300,140 S500,80 800,20" fill="none" stroke="var(--color-primary)" strokeWidth="3" />

                            {/* Token Count Line (Dashed) */}
                            <path d="M0,220 C100,210 200,200 400,180 S600,150 800,140" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="6" />
                        </svg>

                        <div className="chart-labels">
                            <span>2018</span>
                            <span>2019</span>
                            <span>2020</span>
                            <span>2021</span>
                            <span>2022</span>
                            <span>2023</span>
                            <span>2024</span>
                            <span>2025</span>
                        </div>

                        <div className="chart-legend">
                            <span className="cl-item"><span className="cl-dot primary"></span> Treasury (W)</span>
                            <span className="cl-item"><span className="cl-dot gray"></span> Token Count (N)</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Treasury;
