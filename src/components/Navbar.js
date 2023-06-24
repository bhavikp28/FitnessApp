import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="18px" // Changed font size to 18px (25% smaller)
      alignItems="flex-end"
    >
      <Link to="/" style={{ marginTop: '45px', textDecoration: 'none', width: '100px', textAlign: 'center', background: '#0e1d73', padding: '5px', fontSize: '20px', textTransform: 'none', color: 'white' }}>Home</Link>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '100px', textAlign: 'center', background: '#0e1d73', padding: '5px', fontSize: '20px', textTransform: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
