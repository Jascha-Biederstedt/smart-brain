import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <p className="f3 link dim black underline pa3 pointer">Sign out</p>
      </nav>
    </div>
  );
};

export default Navigation;
