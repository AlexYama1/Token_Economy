import React from 'react';
import './Badge.css';

const Badge = ({ status = 'neutral', label, showDot = true, className = '' }) => {
    return (
        <span className={`badge badge--${status} ${className}`}>
            {showDot && <span className="badge__dot" />}
            {label}
        </span>
    );
};

export default Badge;
