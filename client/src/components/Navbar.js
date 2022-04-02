import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between p-5'>
      <h1>Navbar</h1>
      <ul>
        <Link to='/' className='mr-5'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </div>
  );
};

export default Navbar;
