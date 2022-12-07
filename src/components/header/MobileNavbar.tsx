import { Box, Button, Drawer, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface LinkObject {
  title: string;
  navigate: string;
}

type HandleOpenDrawer = () => void;

interface MobileNavbarProps {
  menu: Array<LinkObject>;
  spacing: number;
  zIndex: number;
  openDrawer: boolean;
  handleOpenDrawer: HandleOpenDrawer;
}

interface MenuDrawer {
  title: string;
  navigate: string;
  index: number;
  handleOpenDrawer: HandleOpenDrawer;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  menu,
  spacing,
  zIndex,
  handleOpenDrawer,
  openDrawer,
}) => {
  return (
    <Drawer
      open={openDrawer}
      anchor="right"
      sx={{ zIndex: zIndex - 1, width: '100vw' }}
    >
      <Box height={spacing} />
      <Box
        sx={{
          minWidth: 300,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {menu.map((each, index) => (
          <MenuDrawer
            key={index}
            title={each.title}
            navigate={each.navigate}
            index={index + 1}
            handleOpenDrawer={handleOpenDrawer}
          />
        ))}
        <Button variant="outlined" sx={{ width: 170, mt: 4 }} size="large">
          RESUME
        </Button>
      </Box>
    </Drawer>
  );
};

const MenuDrawer: React.FC<MenuDrawer> = ({
  title,
  navigate,
  index,
  handleOpenDrawer,
}) => {
  return (
    <Link passHref href={navigate}>
      <Box
        width="100%"
        p={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          cursor: 'pointer',
          transition: '0.5s',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.1)',
          },
        }}
        onClick={handleOpenDrawer}
      >
        <Typography>{index.toString().padStart(2, '0')}</Typography>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Link>
  );
};

export default MobileNavbar;
