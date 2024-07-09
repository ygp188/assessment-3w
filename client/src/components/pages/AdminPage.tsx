import { Grid } from '@mui/material';
import React from 'react';
import AddForm from '../ui/AddForm';

export default function AdminPage(): React.JSX.Element {
  return (
    <Grid container direction="row">
      <Grid item xs={3} />
      <Grid item xs={6}>
        <AddForm />
      </Grid>
    </Grid>
  );
}
