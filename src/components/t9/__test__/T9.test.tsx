import React from 'react';
import { render, screen } from '@testing-library/react';
import T9 from '../T9';
import { KEYBOARD_ENTITIES } from "../../keyboard/constants";



describe('T9', () => {
    test('Test that render output for given input', async () => {
        const onSelect = jest.fn();
        const props = {
            inputValue: "23",
            digitMapping: KEYBOARD_ENTITIES,
            onSelect: onSelect
        }

        render(<T9 {...props} />);

        expect(screen.queryByText(/ad/i)).toBeInTheDocument();
        expect(screen.queryByText(/ae/i)).toBeInTheDocument();
        expect(screen.queryByText(/af/i)).toBeInTheDocument();
        expect(screen.queryByText(/bd/i)).toBeInTheDocument();
        expect(screen.queryByText(/be/i)).toBeInTheDocument();
        expect(screen.queryByText(/bf/i)).toBeInTheDocument();
        expect(screen.queryByText(/cd/i)).toBeInTheDocument();
        expect(screen.queryByText(/ce/i)).toBeInTheDocument();
        expect(screen.queryByText(/cf/i)).toBeInTheDocument();
    });
});