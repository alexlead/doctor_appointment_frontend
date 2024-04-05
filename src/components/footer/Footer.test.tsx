import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Copyright © 2024. All rights reserved.')).toBeInTheDocument();
  });
});
