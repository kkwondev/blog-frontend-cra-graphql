import React from 'react';
import { render, screen } from '@testing-library/react';
import Categories from '../pages/Categories';

test('renders Categories', () => {
    render(<Categories />);
    const linkElement = screen.getByText('CategoriesPage');
    expect(linkElement).toBeInTheDocument();
});
