import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import './ReviewSection.css';

const REVIEWS = [
    {
        id: 1,
        rating: 5,
        title: "Incredible depth of knowledge",
        author: "Sato Masahiro",
        certifiedYear: 2024,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
        text: "Tanaka-sensei's teaching method combines traditional rigor with patience. The fieldwork experience was transformative. He truly cares about each student's growth.",
        helpful: 24
    },
    {
        id: 2,
        rating: 5,
        title: "Life-changing apprenticeship",
        author: "Yamamoto Kenji",
        certifiedYear: 2023,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
        text: "I came with basic woodworking skills and left as a certified temple carpenter. The hands-on training at actual restoration sites gave me confidence I couldn't get anywhere else.",
        helpful: 18
    },
    {
        id: 3,
        rating: 5,
        title: "Tradition meets modern teaching",
        author: "Kim Soo-young",
        certifiedYear: 2023,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face",
        text: "As an international student, I worried about language barriers. But Tanaka-sensei's visual demonstrations and patient explanations made complex techniques accessible.",
        helpful: 15
    }
];

const ReviewSection = () => {
    return (
        <div className="review-section">
            <div className="section-header">
                <h2 className="section-title">STUDENT REVIEWS</h2>
                <span className="review-summary">
                    <span className="stars">★★★★★</span>
                    <span className="avg-rating">4.95</span>
                    <span className="review-count">({REVIEWS.length} reviews)</span>
                </span>
            </div>

            <div className="reviews-list">
                {REVIEWS.map(review => (
                    <Card key={review.id} className="review-card">
                        <div className="review-header">
                            <img src={review.avatar} alt={review.author} className="review-avatar" />
                            <div className="review-author-info">
                                <div className="review-author">{review.author}</div>
                                <div className="review-meta">Certified {review.certifiedYear}</div>
                            </div>
                            <div className="review-rating">
                                {'★'.repeat(review.rating)}
                            </div>
                        </div>
                        <h4 className="review-title">{review.title}</h4>
                        <p className="review-text">"{review.text}"</p>
                        <div className="review-footer">
                            <button className="helpful-btn">
                                👍 Helpful ({review.helpful})
                            </button>
                        </div>
                    </Card>
                ))}
            </div>

            <Button variant="secondary" className="load-more-btn">Load more reviews</Button>
        </div>
    );
};

export default ReviewSection;
