import { Box } from '@mui/material';
import React from 'react';
import LootBoxList from '../ui/LootBoxList';

export default function ProfilePage(): JSX.Element {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" my={3}>
      <LootBoxList />
    </Box>
  );
}
