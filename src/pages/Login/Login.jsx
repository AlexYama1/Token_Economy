import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [walletInput, setWalletInput] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleConnect = (e) => {
        e.preventDefault();
        setError('');
        setIsConnecting(true);

        // Simulate connection delay
        setTimeout(() => {
            const input = walletInput.toLowerCase().trim();
            
            if (input === 'student' || input === 'apprentice') {
                navigate('/dashboard');
            } else if (input === 'master' || input === 'teacher') {
                navigate('/master/dashboard');
            } else {
                setError('Demo mode: Enter "student" or "master" to continue');
                setIsConnecting(false);
            }
        }, 800);
    };

    return (
        <div className="login-page">
            <div className="login-background">
                <div className="bg-gradient"></div>
                <div className="bg-pattern"></div>
            </div>

            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="logo-icon">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                                <path d="M20 8 L20 32 M12 14 L20 8 L28 14 M12 26 L20 32 L28 26" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <h1 className="login-title">Heritage Token</h1>
                        <p className="login-subtitle">Traditional Craft Certification Platform</p>
                    </div>

                    <div className="login-body">
                        <div className="wallet-section">
                            <h2 className="wallet-title">Connect Your Wallet</h2>
                            <p className="wallet-desc">
                                Connect your MetaMask or compatible wallet to access your account
                            </p>

                            <form onSubmit={handleConnect} className="wallet-form">
                                <div className="input-group">
                                    <div className="input-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="wallet-input"
                                        placeholder="Enter wallet address or role..."
                                        value={walletInput}
                                        onChange={(e) => setWalletInput(e.target.value)}
                                        autoFocus
                                    />
                                </div>

                                {error && (
                                    <div className="error-message">
                                        <span className="error-icon">!</span>
                                        {error}
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    className={`connect-btn ${isConnecting ? 'connecting' : ''}`}
                                    disabled={isConnecting || !walletInput.trim()}
                                >
                                    {isConnecting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Connecting...
                                        </>
                                    ) : (
                                        <>
                                            <span className="metamask-icon">🦊</span>
                                            Connect Wallet
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="wallet-options">
                                <div className="divider">
                                    <span>or connect with</span>
                                </div>
                                <div className="wallet-buttons">
                                    <button className="wallet-option" onClick={() => setWalletInput('student')}>
                                        <span className="wo-icon">📚</span>
                                        <span className="wo-label">Student Demo</span>
                                    </button>
                                    <button className="wallet-option" onClick={() => setWalletInput('master')}>
                                        <span className="wo-icon">🎓</span>
                                        <span className="wo-label">Master Demo</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="login-footer">
                        <p className="footer-text">
                            By connecting, you agree to our Terms of Service and Privacy Policy
                        </p>
                        <div className="supported-wallets">
                            <span>Supported:</span>
                            <span className="wallet-badge">MetaMask</span>
                            <span className="wallet-badge">WalletConnect</span>
                            <span className="wallet-badge">Coinbase</span>
                        </div>
                    </div>
                </div>

                <div className="login-info">
                    <div className="info-card">
                        <div className="info-icon">🏛️</div>
                        <h3>Preserve Heritage</h3>
                        <p>Connect traditional craft masters with eager apprentices through blockchain-verified credentials</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">🪙</div>
                        <h3>Earn Tokens</h3>
                        <p>Masters earn HTK tokens for each certified apprentice, creating lasting value</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">📜</div>
                        <h3>Verified Skills</h3>
                        <p>Apprentices receive NFT certificates proving their mastery of traditional crafts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
