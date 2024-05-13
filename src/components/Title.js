import React from 'react'
import styled from 'styled-components'
function Title() {
  return (
    <Container>
   <TitleName>
   <span style={{ color: 'white',cursor:'default' }}>Exclusive Deals</span>
   </TitleName>
   </Container>
  )
}

export default Title

const TitleName =styled.div`
  font-family: 'Amaranth','sans-serif';
  text-align: center;
  font-size: 55px;
  font-weight: bold;
  margin-top: 30px;
  padding-top:11px;
 
`
const Container = styled.div`
 background: linear-gradient(to bottom right, #FD98B8, #F9959D, #FB9390, #FB9086);
margin-top:30px;
border-radius:30px 30px 0 0;
width:100%;
height:92px;

`