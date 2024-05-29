import React, { useState } from 'react';
import { navbar } from './data';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleClick = (urlLink) => {
    setActive(urlLink);
  };

  return (
    <div className="container mx-auto my-4">
      <div className='flex justify-between items-center'>
        <div className="logo">
          <a href ="/home"> <img src={logo} alt="Logo" /></a>
        </div>
        <ul className='flex gap-14 align-center  items-center'>
          {navbar.map(({ id, name, urlLink }) => (
            <li key={id} className={`font-semibold ${active === urlLink ? 'bg-defaultColor text-white px-3 py-2' : 'text-black'}`}>
              <Link to={urlLink} onClick={() => handleClick(urlLink)}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-7 items-center">
          <a href="/" className='font-semibold'>Register / Login</a>
          <button className='bg-defaultColor w-48 h-12 rounded-lg text-white font-bold'>Sell Property</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
