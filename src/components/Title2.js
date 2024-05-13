import React from 'react'
import styled from 'styled-components'
function Title2() {
  return (
    <Container>
   <TitleName>
   <GradientText>Best sellers</GradientText>
   </TitleName>
   </Container>
  )
}

export default Title2

const TitleName =styled.div`
  font-family: 'Amaranth','sans-serif';
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
  padding-top:11px;
 
`
const Container = styled.div`
background:#000000;
margin-top:30px;
border-radius:30px;
width:97%;
height:85px;
margin-left:20px;
&:hover {
    transform: scale(1.03);
    transition-delay:150ms;
    transition: all 2s ease-in-out;
    cursor: pointer;
   
  }
`
const GradientText = styled.span`
  color: transparent;
  background: linear-gradient(to bottom right, #E97A9E, #F68694, #F58696, #EA8981,#E98AA3,#F296B5,#F89ABE);
  -webkit-background-clip: text;
  cursor: default;
`;