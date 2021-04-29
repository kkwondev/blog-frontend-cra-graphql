import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from '../pages/Category';

test('renders Categories', () => {
    render(<Category />);
    const linkElement = screen.getByText('CategoryPage');
    expect(linkElement).toBeInTheDocument();
});
