import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function Footer() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <About>
          <h3  className="white1">Get to know us</h3> 
          <p className="white bold">About us</p>
          <p className="white bold">Careers page</p>
        </About>
        <Service>
          <h3 className="white1">Our Services</h3>
          <p className="white bold">Track your order</p>
          <p className="white bold">Order cancellation</p>
          <p className="white bold">Return policy</p>
          <p className="white bold">Customer care</p>
        </Service>
        <Contact>
          <h3 className="white1">Contact us</h3>
          <p className="white bold">+91 9876543211</p>
          <p className="white bold">beans@gmail.com</p>
        </Contact>
        <Connect>
          <h3 className="white1">Connect with us</h3> 
          <p className="white bold">Facebook</p>
          <p className="white bold">Twitter</p>
          <p className="white bold">Instagram</p>
        </Connect>
      </Container>
    </>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #2D3250;
  display: flex;
  justify-content: space-around;
  height: 230px;
 
`;

const About = styled.div`
 margin-top:20px;
 `;

const Service = styled.div`
margin-top:20px`;

const Contact = styled.div`
margin-top:20px`;

const Connect = styled.div`
margin-top:20px`;

const GlobalStyle = createGlobalStyle`
  .white {
    color: rgb(221,221,221);
  }
  .white1{
    color:rgb(255,248,249);
    font-size:17px;
  }

`;
