import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
const Form = () => {
    return (
        <FormContainer>
             <FormTitle>Contact Us</FormTitle>
             <FormWrapper>
                 <form>
                <input type="text" name="Full Name" id="name" placeholder="Full Name"/>
                <input type="email" name="email" id="" placeholder="Email"/>
                <textarea name="message" placeholder="message"></textarea>
                <FormButton as="button" type="type" primary="true" round="true" css ={`
                       width:150px;
                   
                        @media screen and (max-width:768px){
                            width:100%;
                            min-width:350px
                        }
                        @media screen and (max-width:400px){
                            width:100%;
                            min-width:250px
                        }
                        `}>Send</FormButton>
                </form>
             </FormWrapper>
        </FormContainer>
    )
}

export default Form

const FormContainer = styled.div`
padding: 5rem calc((100vw - 1300px) / 2);
`
const FormTitle = styled.h1`
font-size:clamp(1.5rem, 5vw,2rem);
text-align:center;

`
const FormWrapper = styled.div`
margin:1rem auto;
width:500px;
background:#e5e5e5;
padding:2rem;
border:none;
border-radius:25px;
& input , & textarea {
    display:block;
    width:100%;
    margin:1rem 0;

}
& input{
    padding:0.5rem;
    border:none;
    border-radius:54px;
    height:48px;
    padding:1rem 1.5rem;
    outline:none;
}
& textarea{
    outline:none;
    height:150px;
    padding:1rem 1.5rem;
    border:none;
    border-radius:25px;
    margin:1rem 0;

  

}
@media screen and (max-width:768px){
    width:95%;
   
}

`
const FormButton = styled(Button)`
height:48px;
padding:1rem 1.5rem !important;

`;