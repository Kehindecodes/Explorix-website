import React from 'react'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';

const Times = ({whenClicked}) => {
    return (
      <CrossLines onClick={whenClicked} />
    )
}

export default Times

const CrossLines = styled(FaTimes)`
display:none;
color:#fff;
z-index:1;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
}
`