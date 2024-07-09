import PaidIcon from '@mui/icons-material/Paid';
import { IconButton, Link, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { linkStyle } from '../styles';

export default function Navbar(): JSX.Element {
  const links = [
    { to: '/', name: 'Home' },
    { to: '/profile', name: 'Profile' },
    { to: '/admin', name: 'Admin' },
  ];

  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar position="static" sx={{ background: '#39c9bb' }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            {links.map((link) => (
              <Link component={NavLink} key={link.name} to={link.to} sx={linkStyle}>
                {link.name}
              </Link>
            ))}
          </Box>
          <Box mr={1}>
            <IconButton sx={{ color: 'white' }}>
              <PaidIcon />
            </IconButton>
          </Box>
          <Typography variant="button" sx={linkStyle}>
            Баланс: 10000
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
