import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import LootBoxItem from './LootBoxItem';

const lootBoxes = [
  {
    id: 1,
    name: 'Box #1',
    price: 200,
    description: 'Бумажные мечи ниндзя',
    available: true,
  },
  {
    id: 2,
    name: 'Box #2',
    price: 500,
    description: 'Карманный теремок',
    available: true,
  },
  {
    id: 3,
    name: 'Box #3',
    price: 750,
    description: 'Чарующие кубики льда',
    available: true,
  },
  {
    id: 4,
    name: 'Box #4',
    price: 2000,
    description: 'Загадочная пыльца единорога',
    available: true,
  },
  {
    id: 5,
    name: 'Box #5',
    price: 600,
    description: 'Сладкий компас',
    available: true,
  },
  {
    id: 6,
    name: 'Box #6',
    price: 900,
    description: 'Кружка-перевёртыш',
    available: true,
  },
];

export default function LootBoxList(): JSX.Element {
  const location = useLocation();

  const deleteHandler = (): void => {};
  return (
    <Box
      mt={1}
      py={2}
      px={2}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {lootBoxes.map((lootBox) => (
        <Box key={lootBox.id} p={1}>
          <LootBoxItem
            key={lootBox.id}
            lootBox={lootBox}
            deleteHandler={location.pathname === '/profile' ? deleteHandler : null}
          />
        </Box>
      ))}
    </Box>
  );
}
