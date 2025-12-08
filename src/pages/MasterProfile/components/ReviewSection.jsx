import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';

const ReviewSection = () => {
    return (
        <div className="review-section">
            <div className="section-header">
                <h2 className="section-title">REVIEWS</h2>
            </div>

            <Card className="review-card mb-4">
                <div style={{ color: 'var(--color-warning)', marginBottom: '8px' }}>★★★★★</div>
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Incredible depth of knowledge</div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: '#666', marginBottom: '12px' }}>
                    Sato M. · Certified 2024
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
                    "Tanaka-sensei's teaching method combines traditional rigor with patience. The fieldwork experience was transformative."
                </p>
            </Card>

            <Button variant="text">Load more reviews</Button>
        </div>
    );
};

export default ReviewSection;
