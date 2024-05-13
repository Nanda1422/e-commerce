import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .login-button:hover {
    background-color: #3081d0;
    border: 2px solid #3559e0;
    transition: background-color 0.2s ease-in-out;
    opacity: 0.9;
    transform: translateY(-3px);
    filter: brightness(1.1);
  }
`;

function Login() {
  const handleSubmit = () => {
    console.log('Login clicked');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Signup>
          <form>
            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <Button type="button" className="btn login-button" onClick={handleSubmit}>
                Login
              </Button>
            </div>
          </form>
        </Signup>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  position: relative;
  background: url("/images/_2d61c998-d3fc-406f-9b73-0aa5549f6d90.jpeg");
`;

const Signup = styled.div`
  padding-top: 160px;

  .container {
    width: 300px;
    padding: 40px;
    display: block;
    margin: auto;
    background-color: white;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 8%;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
  }

  label {
    padding: 8px 8px 8px 0;
    display: inline-block;
    border-radius: 30%;
  }

  input[type="text"],
  input[type="password"] {
    width: 80%;
    border-radius: 60px;
    padding: 6px 6px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 11px;
  margin: 8px 0;
  border: 1px solid #2ecc71;
  cursor: pointer;
  width: 40%;
  border-radius: 60px;

  &:hover {
    background-color: #3081d0;
    border: 2px solid #3559e0;
   
  }
`;



