import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Phone from '../Phone';

describe('Phone', () => {
    test('Test that render components', async () => {
        render(<Phone />);

        const input = screen.getByPlaceholderText(/Type message/i) as HTMLInputElement;
        const sendButton = screen.getByTitle('Send');
        const key2 = screen.getByRole('button', { name: /2/i });
        const key3 = screen.getByRole('button', { name: /3/i });
        const keySpace = screen.getByRole('button', { name: /space/i });
        const keyRemove = screen.getByRole('button', { name: /remove/i });

        // Type 23 space remove
        user.click(key2);
        user.click(key3);
        user.click(keySpace);
        user.click(keyRemove);

        expect(input.value).toBe('23');

        // press T9 suggestion ae related to 23
        const t9Suggestion = screen.getByRole('button', { name: /ae/i });
        expect(t9Suggestion).toBeInTheDocument();
        user.click(t9Suggestion);

        // check the input been changed after T9 selection
        expect(input.value).toBe('ae ');

        // Send message
        user.click(keyRemove);
        user.click(sendButton);
        expect(input.value).toBe('');

        // test that the message exist
        expect(screen.queryByText(/ae/i)).toBeInTheDocument();
    });
});