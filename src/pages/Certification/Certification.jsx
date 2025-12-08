import React, { useState } from 'react';
import CertStatusInProgress from './components/CertStatusInProgress';
import CertStatusCertified from './components/CertStatusCertified';

const Certification = () => {
    const [isCertified, setIsCertified] = useState(false);

    return (
        <div className="certification-page">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <button
                    onClick={() => setIsCertified(!isCertified)}
                    style={{ fontSize: '12px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Toggle State: {isCertified ? 'Certified' : 'In Progress'}
                </button>
            </div>

            <h1 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: '32px' }}>
                {isCertified ? 'Certification Status' : 'Certification Status'}
            </h1>

            {isCertified ? <CertStatusCertified /> : <CertStatusInProgress />}
        </div>
    );
};

export default Certification;
