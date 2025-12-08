import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, className = '', disabled = false }) => {
    return (
        <button
            className={`btn btn--${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
