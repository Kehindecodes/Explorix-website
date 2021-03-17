import React from 'react'
import{FaBars} from 'react-icons/fa'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';


const hamburger = ({whenClicked}) =>{
  
return(
     <Bars onClick={whenClicked}/>
     

)
} 



export default hamburger

// display on screen

const Bars = styled(FaBars)`
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