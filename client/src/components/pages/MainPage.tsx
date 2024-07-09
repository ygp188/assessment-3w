import { Box, Grid } from '@mui/material';
import React from 'react';
import { formGridStyles } from '../styles';
import LootBoxList from '../ui/LootBoxList';

export default function MainPage(): JSX.Element {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" my={3}>
      <Grid container direction="row" sx={formGridStyles}>
        <div />
      </Grid>
      <LootBoxList />
    </Box>
  );
}
