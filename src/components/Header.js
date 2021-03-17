import React,{useState,useEffect} from 'react'
import {Link} from 'gatsby'
import styled, { css } from 'styled-components';
// import{FaBars} from 'react-icons/fa'
import Hamburger from './Hamburger'
import{menuData} from '../data/MenuData'
import { Button } from './Button';
import Times from './Times'


function Header() {

    const [isActive,setActive] = useState('false')
    
    const handleToggle = () =>{
        setActive(!isActive)

    }
   useEffect(() => {
       setActive(isActive ===false)
      
   }, [])
  
    return (
       <Nav>
           <NavLink to='/'>EXPLORIX</NavLink>
           { !isActive? <Hamburger whenClicked={handleToggle}/> : <Times whenClicked={handleToggle} />}
        
           <NavMenu active={isActive}>
               <div active ={isActive}>
                   <LinkWrapper active={isActive}>
                   {menuData.map((item ,index)=>(
                   <NavLink  to={item.link} key={index}>
                       {item.title}
                   </NavLink>
               )

               )}
                   </LinkWrapper>
             
               </div>
               
           </NavMenu>
           <NavBtn active={isActive}>
               <Button primary="true" round="true" to="/trips" >Book a Flight</Button>
           </NavBtn>
             
       </Nav>
    )
}

export default Header

const Nav = styled.nav`
  background:transparent;
  height:80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1300px)/2);
  z-index:100;
  position:relative;
 
`

const NavLink =styled(Link)`
color:#fff;
display:flex;
flex-direction:row;
align-items:center;
text-decoration:none;
padding:0 1rem;
cursor:pointer;

&:hover{
   color:#f26a2e;
}


@media screen and (max-width:768px){
    padding: 1rem;
    font-size:1.5rem;
    &:hover{
        color:#f26a2e !important;
     }
    
}

`
const LinkWrapper = styled.div`
display:flex;
@media screen and (max-width:768px){
    text-align: center;
	max-width: 90vw;
	max-height: 100vh;
	opacity: 0;
	transition: opacity 0.4s ease;
    flex-direction:column;

    ${({active})=> !active ? css `
opacity: 0;
transition:  opacity 0.4s ease 0.4s;
`:css`
 opacity:1;
 transition:opacity 0.4s ease
`}
}

`

// const Bars = styled(FaBars)`
// display:none;
// color:#fff;

// @media screen and (max-width:768px){
//     display:block;
//     position:absolute;
//     top:0;
//     right:0;
//     transform: translate(-100%, 75%);
//     font-size:1.8rem;
//     cursor:pointer;
// }

// `
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    
   @media screen and (max-width:768px){
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       visibility: hidden;
       overflow: hidden;
       display: flex;
       flex:none;
       align-items: center;
       justify-content: center;

       ${({active})=> active === true ? css `
       visibility:visible;
       `:css`
       visibility:hidden;
       `}
       
         & > div{
            background:  rgba(0,0,0,0.85);
            border-radius: 50%;
            width: 300vw;
            height: 300vw;
            display: flex;
            flex: none;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
          
            ${({active})=> active === true ? css `
            transform: scale(1);
            transition-duration:0.75s;
            `:css`
            transform: scale(0);
            `}
         }
     
     
      
   }
`

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;

 @media screen and (max-width:768px){
  opacity:0;
    z-index: 2;
    // margin-right:50%;
    // margin-left:50%;
    position:fixed;
    right:110px;
    bottom:50px;
    transition: all 0.4s ease;
    text-align:center;
   
    ${({active})=> active === true ? css `
     
     opacity: 1;
     transition:  opacity 0.4s ease 0.4s;
    `:css`
    opacity:0;
    transition:opacity 0.4s ease
    `}
 }
`