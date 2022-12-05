import { AppBar, Box, Container, Typography } from '@mui/material';
import Cursor from '@ui/Cursor';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {
  children: React.ReactNode;
}

export const navHeight = 56;

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { t } = useTranslation('common');

  const menu = [
    {
      title: t('header.home'),
      navigate: '/',
    },
    {
      title: t('header.home'),
      navigate: '/',
    },
    {
      title: t('header.home'),
      navigate: '/',
    },
  ];

  return (
    <Box>
      <AppBar
        sx={{
          maxHeight: navHeight,
          height: '100%',
          boxShadow: 0,
        }}
      >
        <Container sx={{ height: '100%' }}>
          <DesktopNavbar menu={menu} />
          {/* <MobileNavbar menu={menu} spacing={navHeight} /> */}
        </Container>
      </AppBar>
      <Box sx={{ height: navHeight }} />
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'secondary.main',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
      <Cursor />
    </Box>
  );
};

export default Navbar;
