import React from 'react';
import { render, screen } from '@testing-library/react';
import Posts from '../pages/Posts';

test('renders postsPage', () => {
    render(<Posts />);
    const linkElement = screen.getByText('postsPage');
    console.log(linkElement);
    expect(linkElement).toBeInTheDocument();
});
