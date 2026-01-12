import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './MasterCurriculum.css';

const INITIAL_MODULES = [
    {
        id: 1,
        phase: "Theory",
        title: "Module 1: History of Japanese Temple Architecture",
        duration: "2 weeks",
        status: "published"
    },
    {
        id: 2,
        phase: "Theory",
        title: "Module 2: Wood Selection and Properties",
        duration: "3 weeks",
        status: "published"
    },
    {
        id: 3,
        phase: "Theory",
        title: "Module 3: Traditional Tools and Maintenance",
        duration: "2 weeks",
        status: "published"
    },
    {
        id: 4,
        phase: "Theory",
        title: "Module 4: Joinery Fundamentals",
        duration: "4 weeks",
        status: "published"
    },
    {
        id: 5,
        phase: "Theory",
        title: "Module 5: Structural Principles",
        duration: "3 weeks",
        status: "published"
    },
    {
        id: 6,
        phase: "Fieldwork",
        title: "Module 6: Hands-on Workshop Practice",
        duration: "8 weeks",
        status: "published"
    },
    {
        id: 7,
        phase: "Fieldwork",
        title: "Module 7: Restoration Project",
        duration: "12 weeks",
        status: "draft"
    }
];

const MasterCurriculum = () => {
    const [modules, setModules] = useState(INITIAL_MODULES);
    const [editingModule, setEditingModule] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newModule, setNewModule] = useState({ title: '', phase: 'Theory', duration: '' });

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this module?')) {
            setModules(modules.filter(m => m.id !== id));
        }
    };

    const handleEdit = (module) => {
        setEditingModule({ ...module });
    };

    const saveEdit = () => {
        setModules(modules.map(m => m.id === editingModule.id ? editingModule : m));
        setEditingModule(null);
    };

    const handleAdd = () => {
        const newId = Math.max(...modules.map(m => m.id)) + 1;
        setModules([...modules, { ...newModule, id: newId, status: 'draft' }]);
        setNewModule({ title: '', phase: 'Theory', duration: '' });
        setShowAddModal(false);
    };

    const toggleStatus = (id) => {
        setModules(modules.map(m =>
            m.id === id ? { ...m, status: m.status === 'published' ? 'draft' : 'published' } : m
        ));
    };

    const theoryModules = modules.filter(m => m.phase === 'Theory');
    const fieldworkModules = modules.filter(m => m.phase === 'Fieldwork');

    return (
        <div className="master-curriculum-page">
            <div className="mc-header">
                <div>
                    <h1 className="mc-title">Curriculum Management</h1>
                    <p className="mc-subtitle">Manage your teaching modules and course structure</p>
                </div>
                <Button variant="primary" onClick={() => setShowAddModal(true)}>
                    + Add Module
                </Button>
            </div>

            {/* Stats */}
            <div className="mc-stats">
                <Card className="mc-stat-card">
                    <div className="stat-value">{modules.length}</div>
                    <div className="stat-label">Total Modules</div>
                </Card>
                <Card className="mc-stat-card">
                    <div className="stat-value">{theoryModules.length}</div>
                    <div className="stat-label">Theory Modules</div>
                </Card>
                <Card className="mc-stat-card">
                    <div className="stat-value">{fieldworkModules.length}</div>
                    <div className="stat-label">Fieldwork Modules</div>
                </Card>
                <Card className="mc-stat-card">
                    <div className="stat-value">{modules.filter(m => m.status === 'draft').length}</div>
                    <div className="stat-label">Drafts</div>
                </Card>
            </div>

            {/* Theory Phase */}
            <div className="phase-section">
                <h2 className="phase-title">📚 Theory Phase</h2>
                <div className="modules-list">
                    {theoryModules.map((module, index) => (
                        <Card key={module.id} className="module-card">
                            <div className="module-order">{index + 1}</div>
                            <div className="module-content">
                                <div className="module-title">{module.title}</div>
                                <div className="module-meta">
                                    <span className="module-duration">⏱ {module.duration}</span>
                                    <span className={`module-status status-${module.status}`}>
                                        {module.status}
                                    </span>
                                </div>
                            </div>
                            <div className="module-actions">
                                <button className="action-btn edit" onClick={() => handleEdit(module)}>
                                    ✏️ Edit
                                </button>
                                <button className="action-btn toggle" onClick={() => toggleStatus(module.id)}>
                                    {module.status === 'published' ? '📝 Unpublish' : '🚀 Publish'}
                                </button>
                                <button className="action-btn delete" onClick={() => handleDelete(module.id)}>
                                    🗑️ Delete
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Fieldwork Phase */}
            <div className="phase-section">
                <h2 className="phase-title">🔨 Fieldwork Phase</h2>
                <div className="modules-list">
                    {fieldworkModules.map((module, index) => (
                        <Card key={module.id} className="module-card">
                            <div className="module-order">{theoryModules.length + index + 1}</div>
                            <div className="module-content">
                                <div className="module-title">{module.title}</div>
                                <div className="module-meta">
                                    <span className="module-duration">⏱ {module.duration}</span>
                                    <span className={`module-status status-${module.status}`}>
                                        {module.status}
                                    </span>
                                </div>
                            </div>
                            <div className="module-actions">
                                <button className="action-btn edit" onClick={() => handleEdit(module)}>
                                    ✏️ Edit
                                </button>
                                <button className="action-btn toggle" onClick={() => toggleStatus(module.id)}>
                                    {module.status === 'published' ? '📝 Unpublish' : '🚀 Publish'}
                                </button>
                                <button className="action-btn delete" onClick={() => handleDelete(module.id)}>
                                    🗑️ Delete
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Edit Modal */}
            {editingModule && (
                <div className="modal-overlay" onClick={() => setEditingModule(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>Edit Module</h3>
                        <div className="form-group">
                            <label>Module Title</label>
                            <input
                                type="text"
                                value={editingModule.title}
                                onChange={e => setEditingModule({ ...editingModule, title: e.target.value })}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phase</label>
                                <select
                                    value={editingModule.phase}
                                    onChange={e => setEditingModule({ ...editingModule, phase: e.target.value })}
                                >
                                    <option value="Theory">Theory</option>
                                    <option value="Fieldwork">Fieldwork</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    value={editingModule.duration}
                                    onChange={e => setEditingModule({ ...editingModule, duration: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="modal-actions">
                            <Button variant="secondary" onClick={() => setEditingModule(null)}>Cancel</Button>
                            <Button variant="primary" onClick={saveEdit}>Save Changes</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Modal */}
            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>Add New Module</h3>
                        <div className="form-group">
                            <label>Module Title</label>
                            <input
                                type="text"
                                value={newModule.title}
                                onChange={e => setNewModule({ ...newModule, title: e.target.value })}
                                placeholder="e.g., Advanced Joinery Techniques"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phase</label>
                                <select
                                    value={newModule.phase}
                                    onChange={e => setNewModule({ ...newModule, phase: e.target.value })}
                                >
                                    <option value="Theory">Theory</option>
                                    <option value="Fieldwork">Fieldwork</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    value={newModule.duration}
                                    onChange={e => setNewModule({ ...newModule, duration: e.target.value })}
                                    placeholder="e.g., 3 weeks"
                                />
                            </div>
                        </div>
                        <div className="modal-actions">
                            <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancel</Button>
                            <Button variant="primary" onClick={handleAdd} disabled={!newModule.title}>Add Module</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasterCurriculum;
