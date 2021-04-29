import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../pages/Post';

test('renders postPage', () => {
    render(<Post />);
    const linkElement = screen.getByText('postPage');
    expect(linkElement).toBeInTheDocument();
});
