import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="br2 shadow-2 pa3"
        style={{
          width: '150px',
          height: '150px',
          background: 'linear-gradient(to right, #ff5edf 0%, #04c8de 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={brain} alt="logo" />
      </Tilt>
    </div>
  );
};

export default Logo;
