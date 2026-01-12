import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import StudentDetailModal from './components/StudentDetailModal';
import './MyStudents.css';

const STUDENTS = [
    {
        id: 1,
        name: "Yamamoto Kenji",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        enrolled: "2024-09-15",
        status: "theory",
        statusLabel: "THEORY PHASE",
        progress: 67,
        module: "8 of 12 complete",
        token: "0.0 / 1.0 minted",
        email: "yamamoto.k@example.com",
        notes: "Excellent attention to detail. Shows strong aptitude for joinery."
    },
    {
        id: 2,
        name: "Ishikawa Mao",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        enrolled: "2024-03-01",
        status: "fieldwork",
        statusLabel: "FIELDWORK",
        warning: "Verification pending",
        progress: 92,
        capstone: "Temple gate restoration",
        validator: "Kyoto Heritage Fdn",
        email: "ishikawa.m@example.com",
        notes: "Outstanding fieldwork performance. Ready for certification review."
    },
    {
        id: 3,
        name: "Sato Hiroshi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        enrolled: "2024-01-10",
        status: "theory",
        statusLabel: "THEORY PHASE",
        progress: 45,
        module: "5 of 12 complete",
        token: "0.0 / 1.0 minted",
        email: "sato.h@example.com",
        notes: "Consistent progress. Benefits from visual demonstrations."
    },
    {
        id: 4,
        name: "Tanaka Yuki",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        enrolled: "2023-06-20",
        status: "certified",
        statusLabel: "CERTIFIED",
        progress: 100,
        certified: "2024-08-15",
        token: "1.0 / 1.0 minted",
        email: "tanaka.y@example.com",
        notes: "Successfully completed all requirements. Now teaching 3 apprentices."
    },
    {
        id: 5,
        name: "Kim Soo-young",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        enrolled: "2024-07-01",
        status: "theory",
        statusLabel: "THEORY PHASE",
        progress: 33,
        module: "4 of 12 complete",
        token: "0.0 / 1.0 minted",
        email: "kim.sy@example.com",
        notes: "International student from Korea. Strong dedication despite language barrier."
    }
];

const MyStudents = () => {
    const [viewMode, setViewMode] = useState('list');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredStudents = filter === 'all'
        ? STUDENTS
        : STUDENTS.filter(s => s.status === filter);

    const getStatusClass = (status) => {
        switch (status) {
            case 'theory': return 'status-theory';
            case 'fieldwork': return 'status-fieldwork';
            case 'certified': return 'status-certified';
            default: return '';
        }
    };

    return (
        <div className="my-students-page">
            {/* Section A: Pipeline Overview */}
            <div className="ms-header">
                <h1 className="ms-title">My Students</h1>
                <Button variant="primary">+ Add New Student</Button>
            </div>

            <div className="pipeline-row">
                <Card
                    className={`pipeline-card ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    <div className="pl-icon">👥</div>
                    <div className="pl-label">ALL STUDENTS</div>
                    <div className="pl-count">{STUDENTS.length}</div>
                    <div className="pl-sub">total enrolled</div>
                </Card>
                <Card
                    className={`pipeline-card ${filter === 'theory' ? 'active' : ''}`}
                    onClick={() => setFilter('theory')}
                >
                    <div className="pl-icon">📚</div>
                    <div className="pl-label">THEORY PHASE</div>
                    <div className="pl-count">{STUDENTS.filter(s => s.status === 'theory').length}</div>
                    <div className="pl-sub">in progress</div>
                </Card>
                <Card
                    className={`pipeline-card ${filter === 'fieldwork' ? 'active' : ''}`}
                    onClick={() => setFilter('fieldwork')}
                >
                    <div className="pl-icon">🔨</div>
                    <div className="pl-label">FIELDWORK</div>
                    <div className="pl-count">{STUDENTS.filter(s => s.status === 'fieldwork').length}</div>
                    <div className="pl-sub">pending verify</div>
                </Card>
                <Card
                    className={`pipeline-card ${filter === 'certified' ? 'active' : ''}`}
                    onClick={() => setFilter('certified')}
                >
                    <div className="pl-icon">🎓</div>
                    <div className="pl-label">CERTIFIED</div>
                    <div className="pl-count">{STUDENTS.filter(s => s.status === 'certified').length}</div>
                    <div className="pl-sub">completed</div>
                </Card>
            </div>

            {/* Section B: Student List */}
            <div className="list-controls">
                <div className="results-text">
                    Showing {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''}
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
                {filteredStudents.map(student => (
                    <Card key={student.id} className="student-row">
                        <div className="sr-left">
                            <img
                                src={student.avatar}
                                alt={student.name}
                                className="sr-avatar"
                            />
                            <div className="sr-info">
                                <div className="sr-name">{student.name}</div>
                                <div className="sr-meta">Enrolled: {student.enrolled}</div>
                            </div>
                            <div className={`sr-status ${getStatusClass(student.status)}`}>
                                {student.statusLabel}
                                {student.warning && ' ⚠️'}
                            </div>
                            {student.warning && (
                                <div className="sr-warn-text">{student.warning}</div>
                            )}
                        </div>

                        <div className="sr-metrics">
                            <div className="metric-col">
                                <div className="met-label">Progress</div>
                                <ProgressBar value={student.progress} max={100} />
                                <div className="met-val">{student.progress}%</div>
                            </div>
                            {student.module && (
                                <div className="metric-col">
                                    <div className="met-label">Module</div>
                                    <div className="met-text">{student.module}</div>
                                </div>
                            )}
                            {student.capstone && (
                                <div className="metric-col">
                                    <div className="met-label">Capstone</div>
                                    <div className="met-text">{student.capstone}</div>
                                </div>
                            )}
                            {student.certified && (
                                <div className="metric-col">
                                    <div className="met-label">Certified</div>
                                    <div className="met-text">{student.certified}</div>
                                </div>
                            )}
                            <div className="metric-col">
                                <div className="met-label">Token</div>
                                <div className="met-text">{student.token}</div>
                            </div>
                        </div>

                        <div className="sr-actions">
                            <Button
                                variant={student.status === 'fieldwork' ? 'primary' : 'secondary'}
                                onClick={() => setSelectedStudent(student)}
                            >
                                {student.status === 'fieldwork' ? 'Review Submission' : 'View Details'}
                            </Button>
                            <Button variant="text">Message</Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Section C: Alerts */}
            {STUDENTS.some(s => s.warning) && (
                <div className="alerts-section">
                    <h3 className="alerts-title">⚠️ Actions Required</h3>
                    {STUDENTS.filter(s => s.warning).map(student => (
                        <div key={student.id} className="alert-item">
                            <img src={student.avatar} alt={student.name} className="alert-avatar" />
                            <span className="alert-msg">
                                Review fieldwork submission from {student.name}
                            </span>
                            <Button variant="text" onClick={() => setSelectedStudent(student)}>
                                Review →
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            {/* Student Detail Modal */}
            {selectedStudent && (
                <StudentDetailModal
                    student={selectedStudent}
                    onClose={() => setSelectedStudent(null)}
                />
            )}
        </div>
    );
};

export default MyStudents;
