import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Avatar from '../../components/common/Avatar';
import './Settings.css';

const Settings = () => {
    return (
        <div className="settings-page">
            <h1 className="set-title">SETTINGS</h1>

            <h2 className="set-sec-title">PROFILE</h2>
            <Card className="set-card">
                <div className="profile-edit-row">
                    <div className="pe-avatar-col">
                        <Avatar size="xl" />
                        <Button variant="text" style={{ fontSize: '12px' }}>Change</Button>
                    </div>

                    <div className="pe-form-col">
                        <div className="form-group">
                            <label>Display Name</label>
                            <input type="text" value="Tanaka Hiroshi" readOnly className="inp-text" />
                        </div>
                        <div className="form-group">
                            <label>Specialty</label>
                            <input type="text" value="Temple Carpentry" readOnly className="inp-text" />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" value="Kyoto, Japan" readOnly className="inp-text" />
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea readOnly className="inp-area">Preserving 400 years of tradition...</textarea>
                        </div>

                        <div className="form-actions">
                            <Button variant="primary">Save Changes</Button>
                        </div>
                    </div>
                </div>
            </Card>

            <h2 className="set-sec-title">WALLET</h2>
            <Card className="set-card">
                <div className="wallet-row">
                    <div className="wr-info">
                        <div className="wr-label">Connected Address</div>
                        <div className="wr-val mono">0x1a2b3c4d5e6f7890abcdef1234567890abcdef12</div>
                    </div>
                </div>
                <div className="wallet-row">
                    <div className="wr-info">
                        <div className="wr-label">Network</div>
                        <div className="wr-val">Ethereum Mainnet</div>
                    </div>
                </div>
                <div className="wallet-row">
                    <div className="wr-info">
                        <div className="wr-label">Connected Since</div>
                        <div className="wr-val">2023-06-15</div>
                    </div>
                </div>
                <div className="wallet-actions">
                    <Button variant="danger">Disconnect Wallet</Button>
                </div>
            </Card>

            <h2 className="set-sec-title">NOTIFICATIONS</h2>
            <Card className="set-card notif-card">
                <div className="notif-row">
                    <span className="notif-lbl">Email notifications</span>
                    <button className="toggle-switch on">ON</button>
                </div>
                <div className="notif-row">
                    <span className="notif-lbl">New student applications</span>
                    <button className="toggle-switch on">ON</button>
                </div>
                <div className="notif-row">
                    <span className="notif-lbl">Student milestone completions</span>
                    <button className="toggle-switch on">ON</button>
                </div>
                <div className="notif-row">
                    <span className="notif-lbl">Royalty payments received</span>
                    <button className="toggle-switch on">ON</button>
                </div>
                <div className="notif-row">
                    <span className="notif-lbl">Treasury updates (weekly digest)</span>
                    <button className="toggle-switch off">OFF</button>
                </div>
            </Card>
        </div>
    );
};

export default Settings;
