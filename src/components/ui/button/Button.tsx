import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    background: transparent;

    &:disabled {
        cursor: not-allowed;
    }
`

export default Button;