import styled from 'styled-components'

const Message = styled.div`
   position: relative;
   padding: 15px;
   background-color: #f1f1f1;
   border-radius: 0 5px 5px 5px;
   margin: 0 0 10px;

   &:before {
      content: '';
      width: 0;
      height: 0;
      border-width: 0 10px 10px 0;
      border-color: transparent #f1f1f1 transparent transparent;
      border-style: solid;
      position: absolute;
      top: 0;
      right: 100%;
   }
`

export default Message;