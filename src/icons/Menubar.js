import React, { useState } from 'react';
import './menubar.css';
import { Weight } from 'lucide-react';
import Electronics from '../components/Electronics';
import MenFashion from '../components/MenFashion';
import WomenFashion from '../components/WomenFashion';
import Beauty from '../components/Beauty';

const App = () => {
  const [sideNavWidth, setSideNavWidth] = useState(0);

  const openNav = () => {
    setSideNavWidth(250);
  };

  const closeNav = () => {
    setSideNavWidth(0);
  };

  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sideNavWidth}px` }}
      >
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="Electronics">Electronics</a>
        <a href="MenFashion">Men's fashion</a>
        <a href="WomenFashion">Women's fashion</a>
        <a href="Beauty">Beauty</a>
      </div>

      <div id="main">
        <h3>
          <span
            className="span-text"
            style={{
              fontSize: '25px',
              cursor: 'pointer',
              marginLeft: '20px', 
              fontWeight: 'bold',
             
            }}
            onClick={openNav}
          >
            &#9776; Menu
          </span>
        </h3>
      </div>
    </div>
  );
};

export default App;
