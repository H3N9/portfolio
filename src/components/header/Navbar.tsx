import { AppBar, Box, Container, Typography, useTheme } from '@mui/material';
import Cursor from '@ui/Cursor';
import IconContact from '@ui/IconContact';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {
  children: React.ReactNode;
}

export const navHeight = 64;

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { t } = useTranslation('common');
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const menu = [
    {
      title: t('header.home'),
      navigate: '/',
    },
    {
      title: t('header.project'),
      navigate: '/project',
    },
  ];

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
          <DesktopNavbar
            menu={menu}
            handleOpenDrawer={handleDrawer}
            openDrawer={openDrawer}
          />
          <MobileNavbar
            zIndex={theme.zIndex.appBar}
            openDrawer={openDrawer}
            handleOpenDrawer={handleDrawer}
            menu={menu}
            spacing={navHeight}
          />
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
      <IconContact zIndex={theme.zIndex.appBar} />
    </Box>
  );
};

export default Navbar;
