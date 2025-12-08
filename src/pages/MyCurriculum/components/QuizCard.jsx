import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';

const QuizCard = () => {
    return (
        <Card className="quiz-card" style={{ marginTop: '24px', maxWidth: '900px', marginLeft: '48px', marginRight: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: 'var(--font-size-base)', fontWeight: 600 }}>LESSON QUIZ</h3>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>3 questions</span>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                You must score 80% or higher to proceed.
            </p>

            <Button variant="secondary">Start Quiz</Button>
        </Card>
    );
};

export default QuizCard;
