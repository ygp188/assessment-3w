import { Container, Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { listPaperStyles } from './styles';
import BalanceModal from './ui/BalanceModal';
import Navbar from './ui/Navbar';

export default function Layout(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Paper elevation={0} sx={listPaperStyles}>
        <Outlet />
      </Paper>
      <BalanceModal />
    </Container>
  );
}
