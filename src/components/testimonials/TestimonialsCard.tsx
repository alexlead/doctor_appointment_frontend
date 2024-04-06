import { faCircleUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TestimonialsCard: React.FC<{ text: string; author: string }> = ({ text, author }) => {
    return (
        <div className="testimonials-card">
            <p className='blockquote my-3'><FontAwesomeIcon icon={faQuoteLeft} /> {text}</p>
            <p className="author"><FontAwesomeIcon icon={faCircleUser} /> {author}</p>
        </div>
    );
};

export default TestimonialsCard;

