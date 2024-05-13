import React from 'react';
import Data2 from './Data2';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../components/card.css';

const Gadgets = () => {
  return (
    <div className="mainContainer">
      {Data2.map(({ id, image, title, description, price }) => {
        return (
          <div key={id} className="box">
            <div className="card">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="desc">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>${price}</span>
              </div>
              <div className="star">
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiOutlineStar className="icon" />
              </div>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gadgets;