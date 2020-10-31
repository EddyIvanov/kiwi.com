import styled from 'styled-components'
import Button from '../../ui/button';

const TextButton = styled(Button)`
    display: inline-flex;
    justify-content: center;
    font-size: 14px;
    line-height: 1.4;
    color: #b9b9b9;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`

export default TextButton;