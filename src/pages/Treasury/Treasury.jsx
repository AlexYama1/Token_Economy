import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './Treasury.css';

const Treasury = () => {
    const [showDonateModal, setShowDonateModal] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    const donationLink = "https://heritage-token.org/donate?ref=tanaka-hiroshi";

    const copyLink = () => {
        navigator.clipboard.writeText(donationLink);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
    };

    return (
        <div className="treasury-page">
            {/* Section A: Treasury Overview */}
            <div className="treasury-header">
                <div>
                    <h1 className="t-title">Heritage Token Treasury</h1>
                    <div className="t-sub">Public dashboard · Updated in real-time</div>
                </div>
                <Button variant="primary" onClick={() => setShowDonateModal(true)}>
                    💝 Contribute to Treasury
                </Button>
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

            {/* Donate CTA Card */}
            <Card className="donate-cta-card">
                <div className="donate-cta-content">
                    <div className="donate-cta-icon">🏛️</div>
                    <div className="donate-cta-text">
                        <h3>Support Traditional Craftsmanship</h3>
                        <p>Every contribution helps preserve centuries-old traditions and supports master craftspeople in training the next generation.</p>
                    </div>
                    <div className="donate-cta-actions">
                        <Button variant="primary" onClick={() => setShowDonateModal(true)}>
                            Donate Now
                        </Button>
                        <div className="share-link-container">
                            <input
                                type="text"
                                value={donationLink}
                                readOnly
                                className="share-link-input"
                            />
                            <button className="copy-link-btn" onClick={copyLink}>
                                {linkCopied ? '✓ Copied!' : '📋 Copy'}
                            </button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Section B: Composition */}
            <div className="t-section">
                <h2 className="t-sec-title">TREASURY COMPOSITION</h2>
                <Card className="composition-card">
                    <div className="comp-layout">
                        <div className="donut-chart-container">
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
                                <div className="li-dot" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Government Subsidies</span>
                                    <span className="li-val">¥88,056,000 (45%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-dot" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Guild Tax Revenue</span>
                                    <span className="li-val">¥58,704,000 (30%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-dot" style={{ backgroundColor: '#2E7D32' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Internal Royalties</span>
                                    <span className="li-val">¥39,136,000 (20%)</span>
                                </div>
                            </div>
                            <div className="legend-item">
                                <div className="li-dot" style={{ backgroundColor: '#9C27B0' }}></div>
                                <div className="li-content">
                                    <span className="li-name">Donations & Impact Investors</span>
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
                    <div className="growth-chart-placeholder">
                        <svg width="100%" height="250" viewBox="0 0 800 250" preserveAspectRatio="none">
                            <line x1="0" y1="200" x2="800" y2="200" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="150" x2="800" y2="150" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="100" x2="800" y2="100" stroke="#E0E0E0" strokeDasharray="4" />
                            <line x1="0" y1="50" x2="800" y2="50" stroke="#E0E0E0" strokeDasharray="4" />
                            <path d="M0,200 C100,190 200,160 300,140 S500,80 800,20" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
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

            {/* Donate Modal */}
            {showDonateModal && (
                <div className="modal-overlay" onClick={() => setShowDonateModal(false)}>
                    <div className="donate-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowDonateModal(false)}>×</button>

                        <div className="donate-modal-header">
                            <span className="donate-icon">💝</span>
                            <h2>Contribute to Heritage Token Treasury</h2>
                            <p>Your donation directly supports the preservation of traditional craftsmanship.</p>
                        </div>

                        <div className="donate-options">
                            <div className="donate-option">
                                <div className="do-amount">¥10,000</div>
                                <div className="do-label">Apprentice Supporter</div>
                            </div>
                            <div className="donate-option featured">
                                <div className="do-badge">Popular</div>
                                <div className="do-amount">¥50,000</div>
                                <div className="do-label">Craft Patron</div>
                            </div>
                            <div className="donate-option">
                                <div className="do-amount">¥100,000</div>
                                <div className="do-label">Heritage Guardian</div>
                            </div>
                        </div>

                        <div className="donate-custom">
                            <label>Or enter custom amount</label>
                            <div className="custom-input-row">
                                <span className="currency">¥</span>
                                <input type="number" placeholder="0" className="custom-amount" />
                            </div>
                        </div>

                        <div className="donate-share">
                            <h4>Share Your Support</h4>
                            <p>Invite others to contribute by sharing this link:</p>
                            <div className="share-row">
                                <input
                                    type="text"
                                    value={donationLink}
                                    readOnly
                                    className="share-input"
                                />
                                <button className="share-copy-btn" onClick={copyLink}>
                                    {linkCopied ? '✓ Copied!' : 'Copy Link'}
                                </button>
                            </div>
                        </div>

                        <div className="donate-actions">
                            <Button variant="secondary" onClick={() => setShowDonateModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary">
                                Proceed to Payment
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Treasury;
