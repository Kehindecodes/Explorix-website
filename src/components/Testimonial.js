import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'

import{IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data  = useStaticQuery(graphql `
    query MyQuery {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonial1","testimonial2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return (
      <TestimonialsContainer>
          <TopLine>
              Testimonials
          </TopLine>
          <Description>
              What People are Saying
          </Description>
          <ContentWrapper>
              <ColumnOne>
                 <Testimonial 
                 data-sal="slide-down"
                 data-sal-delay="100"
                //  data-sal-easing="ease"
                 >
                     <IoMdCheckmarkCircleOutline css={`color:#3fffa8;
                     font-size:2rem;
                     margin-bottom:1rem;
                     `}/>
                     <h3>Sean Michels</h3>
                     <p>"The greatest experience of my life ! It was so much fun exploring the mountains and they made it super easy to book my trips and accomadation."</p>
                 </Testimonial>
                 <Testimonial
                   data-sal="slide-up"
                   data-sal-delay="100"
                 >
                     <FaRegLightbulb css={`color:#f9b19b;
                     font-size:2rem;
                     margin-bottom:1rem;
                     `}/>
                     <h3>David Alba</h3>
                     <p>"It was so easy to set up my trips ! They answered all my questions right away and gave me the best price out of all the companies I researched."</p>
                 </Testimonial>
              </ColumnOne>
              <ColumnTwo>
              {data.allFile.edges.map((image,key)=>(
                     <Image 
                     data-sal="zoom-in"
                   data-sal-delay="200"
                   data-sal-easing="ease"
                      key={key} fluid={image.node.childImageSharp.fluid}/>
              ))}
           
              </ColumnTwo>
          </ContentWrapper>

      </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer= styled.div`
 width:100%;
 background:#fcfcfc;
 color:#000;
 padding:5rem calc((100vw - 1300px)/2);
 min-height:100vh;

 
`
const TopLine= styled.div`
 color:#077bf1;
 font-size:1rem;
 padding-left:2rem;
 margin-bottom:0.75rem;
`
const Description = styled.p`
 text-align:start;
 padding-left:2rem;
 margin-bottom:4rem;
 font-size: clamp(1.5rem, 5vw, 2rem);
 font-weight: bold;
`



const ContentWrapper= styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  padding:0 2rem;
  
  @media screen and (max-width:768px){
      grid-template-columns:1fr;

  }
`


const ColumnOne = styled.div`
 display:grid;
 grid-template-rows:1fr 1fr;
`
const Testimonial= styled.div`
 padding-top:1rem;
 padding-right:2rem;
 h3{
     margin-bottom:1rem;
     font-size:1.5rem;
     font-style:italic;
 }
 p{
     color:#3b3b3b;
 }
`
const ColumnTwo= styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 margin-top:2rem;
 grid-gap: 10px;
 

 @media screen and (max-width:500px){
     grid-template-columns:1fr;
 }
`
const Image = styled(Img)`
   border-radius:10px;
   height: 100%;
}
 
`