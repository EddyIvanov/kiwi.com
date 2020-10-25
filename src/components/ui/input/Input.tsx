import styled from 'styled-components'

const Input = styled.input`
    height: 36px;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #c1c1c1;

    &:focus {
        outline: none;
        border-color: #aaa;
    }
`

export default Input;