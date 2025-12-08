import React from 'react';

const WelcomeHeader = ({ name, role }) => {
    return (
        <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: '4px' }}>Welcome back, {name}</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)' }}>
                {role}
            </p>
        </div>
    );
};

export default WelcomeHeader;
