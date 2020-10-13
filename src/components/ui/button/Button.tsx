import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    height: 36px;
    border: 0;
    border-radius: 0;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`

export default Button;