import styled from 'styled-components';

const Scrollbar: any = styled.div`
    overflow: auto hidden;
    white-space: nowrap;
    padding: 0 30px;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* Chrome/Safari/Webkit */
    }
`

export default Scrollbar;