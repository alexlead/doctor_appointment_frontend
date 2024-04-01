import React from 'react';

const TestimonialsCard: React.FC<{ text: string; author: string }> = ({ text, author }) => {
    return (
        <div className="testimonials-card">
            <p>{text}</p>
            <p className="author">{author}</p>
        </div>
    );
};

export default TestimonialsCard;

