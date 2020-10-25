import styled from 'styled-components';

const Icon: any = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #ddd;
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    box-shadow: 0px 0 7px 4px #1e1e1e;

    &:hover {
        color: #fff;
    }
`

export default Icon;