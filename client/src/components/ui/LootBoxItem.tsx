import { Box, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import type { LootBoxType } from '../../types/lootBox';
import { buttonStyle, cardStyle, cardTextStyle } from '../styles';

type LootBoxItemProps = {
  lootBox: LootBoxType;
  deleteHandler: ((id: number) => void) | null;
};

export default function LootBoxItem({ lootBox, deleteHandler }: LootBoxItemProps): JSX.Element {
  return (
    <Paper elevation={3} sx={cardStyle}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        px={1}
        sx={{ height: 280 }}
      >
        <Typography variant="h5" sx={cardTextStyle}>
          {lootBox.name}
        </Typography>
        <>
          <Typography variant="h1" sx={cardTextStyle}>
            ?
          </Typography>
          <Button variant="outlined" sx={buttonStyle}>
            Купить за {lootBox.price}
          </Button>
        </>
      </Box>
    </Paper>
  );
}
