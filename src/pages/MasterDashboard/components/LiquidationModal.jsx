import React, { useState } from 'react';
import './LiquidationModal.css';

const LiquidationModal = ({ onClose, tokenAmount, tokenValue }) => {
    const [confirmText, setConfirmText] = useState('');
    const [step, setStep] = useState(1); // 1 = warning, 2 = confirm, 3 = processing

    const handleProceed = () => {
        if (step === 1) {
            setStep(2);
        } else if (step === 2 && confirmText === 'LIQUIDATE') {
            setStep(3);
            // Simulate processing
            setTimeout(() => {
                onClose();
            }, 2000);
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {step === 1 && (
                    <>
                        <div className="modal-icon warning">⚠️</div>
                        <h2 className="modal-title">Liquidate Tokens?</h2>

                        <div className="modal-body">
                            <div className="liquidation-summary">
                                <div className="summary-row">
                                    <span>Tokens to Liquidate</span>
                                    <span className="summary-value">{tokenAmount} HTK</span>
                                </div>
                                <div className="summary-row">
                                    <span>Current Value</span>
                                    <span className="summary-value">{formatCurrency(tokenValue)}</span>
                                </div>
                            </div>

                            <div className="warning-box">
                                <h3>⚠️ Important Warning</h3>
                                <p>By liquidating your tokens, you will:</p>
                                <ul>
                                    <li><strong>Permanently lose</strong> your ownership stake in the Heritage Token treasury</li>
                                    <li><strong>Forfeit all future royalty income</strong> from your teaching lineage</li>
                                    <li><strong>Lose royalties</strong> when your former students certify their own apprentices</li>
                                </ul>
                                <p className="warning-note">
                                    This action is <strong>irreversible</strong>. Your tokens represent your contribution to
                                    preserving traditional craftsmanship.
                                </p>
                            </div>

                            <div className="alternative-box">
                                <h4>💡 Consider Alternatives</h4>
                                <p>Instead of full liquidation, you could:</p>
                                <ul>
                                    <li>Partial withdrawal (keep some tokens for royalties)</li>
                                    <li>Token transfer to a family member or successor</li>
                                    <li>Contact treasury for hardship assistance</li>
                                </ul>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button className="modal-btn secondary" onClick={onClose}>
                                Cancel
                            </button>
                            <button className="modal-btn danger" onClick={handleProceed}>
                                I Understand, Continue
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="modal-icon danger">🔴</div>
                        <h2 className="modal-title">Final Confirmation</h2>

                        <div className="modal-body">
                            <p className="confirm-text">
                                Type <strong>LIQUIDATE</strong> to confirm you want to permanently
                                liquidate your {tokenAmount} HTK tokens.
                            </p>

                            <input
                                type="text"
                                className="confirm-input"
                                placeholder="Type LIQUIDATE"
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                                autoFocus
                            />

                            <div className="final-warning">
                                <span>⚠️</span>
                                <span>You will lose all future royalty income ({formatCurrency(156400)}/year estimated)</span>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button className="modal-btn secondary" onClick={() => setStep(1)}>
                                Go Back
                            </button>
                            <button
                                className="modal-btn danger"
                                onClick={handleProceed}
                                disabled={confirmText !== 'LIQUIDATE'}
                            >
                                Confirm Liquidation
                            </button>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="modal-icon processing">
                            <div className="spinner"></div>
                        </div>
                        <h2 className="modal-title">Processing...</h2>
                        <p className="processing-text">
                            Please wait while we process your liquidation request.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LiquidationModal;
