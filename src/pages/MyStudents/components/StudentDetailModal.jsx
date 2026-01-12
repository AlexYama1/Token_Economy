import React from 'react';
import Button from '../../../components/common/Button';
import ProgressBar from '../../../components/common/ProgressBar';
import './StudentDetailModal.css';

const StudentDetailModal = ({ student, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="student-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <img src={student.avatar} alt={student.name} className="modal-avatar" />
                    <div className="modal-info">
                        <h2 className="modal-name">{student.name}</h2>
                        <p className="modal-meta">Enrolled: {student.enrolled}</p>
                        <p className="modal-email">{student.email}</p>
                    </div>
                    <div className={`modal-status status-${student.status}`}>
                        {student.statusLabel}
                    </div>
                </div>

                <div className="modal-body">
                    <div className="detail-section">
                        <h3 className="section-label">Progress Overview</h3>
                        <div className="progress-row">
                            <ProgressBar value={student.progress} max={100} />
                            <span className="progress-text">{student.progress}% Complete</span>
                        </div>
                    </div>

                    <div className="detail-grid">
                        {student.module && (
                            <div className="detail-item">
                                <span className="detail-label">Current Module</span>
                                <span className="detail-value">{student.module}</span>
                            </div>
                        )}
                        {student.capstone && (
                            <div className="detail-item">
                                <span className="detail-label">Capstone Project</span>
                                <span className="detail-value">{student.capstone}</span>
                            </div>
                        )}
                        {student.validator && (
                            <div className="detail-item">
                                <span className="detail-label">Validator</span>
                                <span className="detail-value">{student.validator}</span>
                            </div>
                        )}
                        {student.certified && (
                            <div className="detail-item">
                                <span className="detail-label">Certification Date</span>
                                <span className="detail-value">{student.certified}</span>
                            </div>
                        )}
                        <div className="detail-item">
                            <span className="detail-label">Token Status</span>
                            <span className="detail-value">{student.token}</span>
                        </div>
                    </div>

                    {student.notes && (
                        <div className="detail-section">
                            <h3 className="section-label">Master's Notes</h3>
                            <p className="notes-text">"{student.notes}"</p>
                        </div>
                    )}

                    {student.warning && (
                        <div className="warning-section">
                            <div className="warning-icon">⚠️</div>
                            <div className="warning-content">
                                <h4>Action Required</h4>
                                <p>{student.warning}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-actions">
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button variant="text">Send Message</Button>
                    {student.status === 'fieldwork' && (
                        <Button variant="primary">Approve Certification</Button>
                    )}
                    {student.status === 'theory' && (
                        <Button variant="primary">Mark Milestone Complete</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentDetailModal;
