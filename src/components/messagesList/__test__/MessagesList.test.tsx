import React from 'react';
import { render } from '@testing-library/react';
import MessagesList from '../MessagesList';

describe('MessagesList', () => {
    test('Test messages are rendered', () => {
        const messages = ["Message 1", "Message 2"];

        const { getByText } = render(<MessagesList messages={messages} />);
        const firstMessage = getByText(/Message 1/i);
        const secondMessage = getByText(/Message 2/i);

        expect(firstMessage).toBeInTheDocument();
        expect(secondMessage).toBeInTheDocument();
    });
});