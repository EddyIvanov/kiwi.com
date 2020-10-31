import styled from 'styled-components'
import Button from '../../ui/button';

const Key = styled(Button)`
    display: inline-flex;
    flex-basis: 33.33%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #454545;
    border: 1px solid #1e1e1e;
    padding: 15px 0;
    cursor: pointer;

    &:nth-child(3n + 1) {
        border-left: 0;
    }

    &:nth-child(3n) {
        border-right: 0;
    }
`

export default Key;