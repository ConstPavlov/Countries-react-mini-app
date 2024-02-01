import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="links--pages">
      <Link className="link--page" to="/home">
        Home
      </Link>
      <Link className="link--page" to="/countries">
        Countries
      </Link>
      <Link className="link--page" to="/about">
        About us
      </Link>
    </div>
  );
};

export default Navbar;
