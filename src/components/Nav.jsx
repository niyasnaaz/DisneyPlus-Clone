import React, { useEffect, useState } from 'react';
import './Nav.css';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={`${show && 'nav-black'} nav`}>
      <img
        width={'100px'}
        src="https://www.dignited.com/wp-content/uploads/2019/04/1200px-Disney_logo.svg_-1024x594.png"
        alt="NoImg"
      />

      <div className="nav-search mt-2">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className='me-5'>
      <Button color="inherit" className='fw-bold  mt-2 text-light'>Login</Button>
      </div>
    </div>
  );
}

export default Nav;
