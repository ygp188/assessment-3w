import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import { buttonStyle, textFieldStyle } from '../styles';

export default function BalanceModal(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Пополнение баланса</DialogTitle>
      <DialogContent>
        <Box display="flex" alignItems="center" justifyContent="space-around" sx={{ height: 100 }}>
          <TextField
            type="number"
            variant="outlined"
            size="small"
            label="Сумма"
            sx={textFieldStyle}
          />
          <Button variant="outlined" sx={buttonStyle}>
            Пополнить
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
