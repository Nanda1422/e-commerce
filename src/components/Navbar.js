import React from 'react';
import styled from 'styled-components';
import Menu from '../icons/Menubar';

function Navbar() {
  return (
    <Container>
      <Nav>
        <MenuIcon>
          <Menu />
        </MenuIcon>
        <Search type="text" placeholder="Search" />
        <CartIcon>
          <h2>
            <span className="cart-text"> &#x1F6D2;Cart </span>
          </h2>
        </CartIcon>
        <Profile>
          <div className="profile-image">
            <img src='https://i.pinimg.com/736x/5a/6e/55/5a6e557d8c5a68bc93106239dc2779fe.jpg' alt="Profile" />
          </div>
        </Profile>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div``;

const Nav = styled.div`
  background-color: #2D3250;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Search = styled.input`
  margin-top: 15px;
  margin-left: 400px;
  margin-bottom: 10px;
  cursor: text;
  border-radius: 5px;
  width: 500px;
  height: 30px;
  border: none;
  outline: none;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  color: #000;
  transition: 0.3s;

  &:hover {
    background-color: #e6e6e6;
    transition: 0.3s;
  }

  &:focus {
    background-color: #d9d9d9;
  }
`;

const MenuIcon = styled.div`
  flex: 0 0 auto;
  margin-right: 10px; 
`;

const CartIcon = styled.div`
  flex: 0 0 auto;
  margin-left: 250px;
  cursor: pointer;

  .cart-text {
    color: black;
    font-size: 25px;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  &:active {
    transform: scale(1.1);
    transition: transform 0.3s;
  }

  &:hover .cart-text {
    color: white;
  }
`;

const Profile = styled.div`
  .profile-image {
    display: inline-block;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-left: 80px;
    margin-top: 4px;
  }

  .profile-image img {
    width: 100%;
    height: 100%;
  }
`;



