import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './Royalties.css';

const Royalties = () => {
    return (
        <div className="royalties-page">
            {/* Section A: Royalty Overview */}
            <div className="royalty-overview">
                <h1 className="page-title">ROYALTY INCOME</h1>

                <div className="ro-stats-row">
                    <Card className="ro-stat">
                        <div className="ros-label">TOTAL EARNED (LIFETIME)</div>
                        <div className="ros-val">¥847,200</div>
                    </Card>
                    <Card className="ro-stat">
                        <div className="ros-label">THIS YEAR</div>
                        <div className="ros-val">¥156,400</div>
                        <div className="ros-sub success">+¥23,100 vs last year</div>
                    </Card>
                </div>

                <Card className="royalty-chart-card">
                    <div className="rcc-title">ROYALTY INCOME OVER TIME</div>
                    <div className="rcc-chart-box">
                        {/* Simple CSS Bar Chart Visualization */}
                        <div className="bar-chart">
                            {/* Mock Bars */}
                            <div className="bar-col"><div className="bar" style={{ height: '30%' }}></div><div className="bar-lbl">Jan</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '45%' }}></div><div className="bar-lbl">Feb</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '60%' }}></div><div className="bar-lbl">Mar</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '40%' }}></div><div className="bar-lbl">Apr</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '75%' }}></div><div className="bar-lbl">May</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '55%' }}></div><div className="bar-lbl">Jun</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '35%' }}></div><div className="bar-lbl">Jul</div></div>
                            <div className="bar-col"><div className="bar" style={{ height: '80%' }}></div><div className="bar-lbl">Aug</div></div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Section B: Lineage Tree */}
            <div className="lineage-section">
                <div className="ls-header">
                    <h2 className="ls-title">YOUR TEACHING LINEAGE</h2>
                    <Button variant="text">Expand All</Button>
                </div>
                <p className="ls-desc">You earn 10% royalty when your former students teach their own apprentices</p>

                <Card className="tree-card">
                    <div className="tree-node root-node">
                        <span className="node-icon root">YOU</span>
                        <span className="node-name">Tanaka Hiroshi</span>
                    </div>

                    <div className="tree-branch">
                        <div className="tree-node master-node">
                            <span className="branch-line">├──</span>
                            <span className="node-icon">Master</span>
                            <div className="node-content">
                                <div className="nc-row">
                                    <span className="nc-name">Nakamura Yuki</span>
                                    <span className="nc-meta">(certified 2019)</span>
                                </div>
                                <div className="nc-royalty">Royalty earned: ¥234,500</div>
                            </div>
                        </div>

                        <div className="tree-leaf-group">
                            <div className="tree-leaf">
                                <span className="leaf-line">│   ├──</span>
                                <span className="leaf-name">Student A (certified 2023)</span>
                                <span className="leaf-royalty">→ ¥12,400 royalty</span>
                            </div>
                            <div className="tree-leaf">
                                <span className="leaf-line">│   └──</span>
                                <span className="leaf-name">Student B (certified 2024)</span>
                                <span className="leaf-royalty">→ ¥11,800 royalty</span>
                            </div>
                        </div>
                    </div>

                    <div className="tree-branch">
                        <div className="tree-node master-node">
                            <span className="branch-line">└──</span>
                            <span className="node-icon">Master</span>
                            <div className="node-content">
                                <div className="nc-row">
                                    <span className="nc-name">Watanabe Koji</span>
                                    <span className="nc-meta">(certified 2020)</span>
                                </div>
                                <div className="nc-royalty">Royalty earned: ¥189,200</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Section C: Transaction Log */}
            <div className="royalty-log">
                <div className="rl-header">
                    <h2 className="rl-title">TRANSACTION HISTORY</h2>
                    <Button variant="secondary">Export CSV</Button>
                </div>
                <Card className="rl-table-card">
                    <table className="rl-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Source</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aug 12</td>
                                <td>Nakamura → Student B cert.</td>
                                <td className="text-success">+¥11,800</td>
                                <td><span className="badge-success">✓ Paid</span></td>
                            </tr>
                            <tr>
                                <td>Jul 28</td>
                                <td>Watanabe → Student E cert.</td>
                                <td className="text-success">+¥9,400</td>
                                <td><span className="badge-success">✓ Paid</span></td>
                            </tr>
                            <tr>
                                <td>Jul 15</td>
                                <td>Nakamura → Student A cert.</td>
                                <td className="text-success">+¥12,400</td>
                                <td><span className="badge-success">✓ Paid</span></td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default Royalties;
