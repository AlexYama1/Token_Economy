import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, size = 'md', className = '' }) => {
    return (
        <div className={`avatar avatar--${size} ${className}`}>
            <img src={src} alt={alt} className="avatar__image" />
        </div>
    );
};

export default Avatar;
