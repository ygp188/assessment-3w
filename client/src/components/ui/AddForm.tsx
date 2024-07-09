import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { buttonStyle, cardTextStyle, formGridStyles, textFieldStyle } from '../styles';

export default function AddForm(): JSX.Element {
  return (
    <Paper sx={{ ...formGridStyles, marginTop: 15 }}>
      <Box
        px={5}
        py={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: 350 }}
        component="form"
      >
        <Typography variant="h5" sx={cardTextStyle}>
          Добавление нового подарка
        </Typography>
        <TextField fullWidth variant="outlined" name="name" label="Название" sx={textFieldStyle} />
        <TextField
          fullWidth
          variant="outlined"
          type="number"
          name="price"
          label="Цена"
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          variant="outlined"
          name="description"
          label="Описание"
          sx={textFieldStyle}
        />
        <Button size="large" variant="outlined" sx={buttonStyle} type="submit">
          Добавить
        </Button>
      </Box>
    </Paper>
  );
}
