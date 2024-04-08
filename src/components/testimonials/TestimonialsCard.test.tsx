import React from 'react';
import { render } from '@testing-library/react';
import TestimonialsCard from './TestimonialsCard';
import { faQuoteLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons';

describe('TestimonialsCard', () => {
    it('renders correctly with given text and author', () => {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        const author = 'John Doe';

        const { getByText } = render(
            <TestimonialsCard text={text} author={author} />
        );

        expect(getByText(text)).toBeInTheDocument();
        expect(getByText(author)).toBeInTheDocument();
    });

    it('renders the quote left icon', () => {
        const { container } = render(
            <TestimonialsCard text="Some text" author="John Doe" />
        );

        
        const quoteLeftIcon = container.querySelector('.fa-quote-left');

        expect(quoteLeftIcon).toBeInTheDocument();
    });

    it('renders the user circle icon', () => {
        const { container } = render(
            <TestimonialsCard text="Some text" author="John Doe" />
        );

      
        const userCircleIcon = container.querySelector('.fa-circle-user');

        expect(userCircleIcon).toBeInTheDocument();
    });
});
