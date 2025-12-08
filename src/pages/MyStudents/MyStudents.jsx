import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Avatar from '../../components/common/Avatar';
import ProgressBar from '../../components/common/ProgressBar';
import './MyStudents.css';

const MyStudents = () => {
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'kanban'

    return (
        <div className="my-students-page">
            {/* Section A: Pipeline Overview */}
            <div className="ms-header">
                <h1 className="ms-title">MY STUDENTS</h1>
                <Button variant="primary">+ Add New</Button>
            </div>

            <div className="pipeline-row">
                <Card className="pipeline-card active">
                    <div className="pl-label">APPLICANTS</div>
                    <div className="pl-count">12</div>
                    <div className="pl-sub">awaiting review</div>
                </Card>
                <Card className="pipeline-card">
                    <div className="pl-label">THEORY PHASE</div>
                    <div className="pl-count">6</div>
                    <div className="pl-sub">in progress</div>
                </Card>
                <Card className="pipeline-card">
                    <div className="pl-label">FIELDWORK</div>
                    <div className="pl-count">2</div>
                    <div className="pl-sub">pending verify</div>
                </Card>
                <Card className="pipeline-card">
                    <div className="pl-label">CERTIFIED</div>
                    <div className="pl-count">47</div>
                    <div className="pl-sub">completed</div>
                </Card>
            </div>

            {/* Section B: Student List */}
            <div className="list-controls">
                <div className="filters">
                    <Button variant="secondary">All Phases ▼</Button>
                    <Button variant="secondary">All Years ▼</Button>
                </div>
                <div className="view-toggles">
                    <button
                        className={`vt-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                    >≡ List</button>
                    <button
                        className={`vt-btn ${viewMode === 'kanban' ? 'active' : ''}`}
                        onClick={() => setViewMode('kanban')}
                    >⊞ Kanban</button>
                </div>
            </div>

            <div className="student-list">
                {/* Student 1 */}
                <Card className="student-row">
                    <div className="sr-left">
                        <Avatar size="md" />
                        <div className="sr-info">
                            <div className="sr-name">Yamamoto Kenji</div>
                            <div className="sr-meta">Enrolled: 2024-09-15</div>
                        </div>
                        <div className="sr-status status-theory">THEORY PHASE</div>
                    </div>

                    <div className="sr-metrics">
                        <div className="metric-col">
                            <div className="met-label">Progress</div>
                            <ProgressBar value={67} max={100} />
                            <div className="met-val">67%</div>
                        </div>
                        <div className="metric-col">
                            <div className="met-label">Module</div>
                            <div className="met-text">8 of 12 complete</div>
                        </div>
                        <div className="metric-col">
                            <div className="met-label">Token</div>
                            <div className="met-text">0.0 / 1.0 minted</div>
                        </div>
                    </div>

                    <div className="sr-actions">
                        <Button variant="secondary">View Progress</Button>
                        <Button variant="text">Message</Button>
                    </div>
                </Card>

                {/* Student 2 */}
                <Card className="student-row">
                    <div className="sr-left">
                        <Avatar size="md" />
                        <div className="sr-info">
                            <div className="sr-name">Ishikawa Mao</div>
                            <div className="sr-meta">Enrolled: 2024-03-01</div>
                        </div>
                        <div className="sr-status status-warn">FIELDWORK ⚠️</div>
                        <div className="sr-warn-text">Verification pending</div>
                    </div>

                    <div className="sr-metrics">
                        <div className="metric-col">
                            <div className="met-label">Progress</div>
                            <ProgressBar value={92} max={100} />
                            <div className="met-val">92%</div>
                        </div>
                        <div className="metric-col">
                            <div className="met-label">Capstone</div>
                            <div className="met-text">Temple gate restoration</div>
                        </div>
                        <div className="metric-col">
                            <div className="met-label">Validator</div>
                            <div className="met-text">Kyoto Heritage Fdn</div>
                        </div>
                    </div>

                    <div className="sr-actions">
                        <Button variant="primary">Review Submission</Button>
                        <Button variant="text">Contact</Button>
                    </div>
                </Card>
            </div>

            {/* Section C: Alerts */}
            <div className="alerts-section">
                <h3 className="alerts-title">⚠️ ACTIONS REQUIRED</h3>
                <div className="alert-item">
                    <span className="alert-msg">🔔 Review fieldwork submission from Ishikawa Mao</span>
                    <Button variant="text">Review →</Button>
                </div>
            </div>
        </div>
    );
};

export default MyStudents;
