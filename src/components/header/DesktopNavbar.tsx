import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface LinkObject {
  title: string;
  navigate: string;
}

type HandleOpenDrawer = () => void;

interface DesktopNavbarProps {
  menu: Array<LinkObject>;
  handleOpenDrawer: HandleOpenDrawer;
  openDrawer: boolean;
}

interface NavLinkProps {
  title: string;
  navigate: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  menu,
  handleOpenDrawer,
  openDrawer,
}) => {
  return (
    <Box sx={{ height: '100%', justifyContent: 'flex-end', display: 'flex' }}>
      <Box sx={{ display: { md: 'flex', xs: 'none' }, height: '100%' }}>
        {menu.map((each, index) => (
          <NavLink key={index} title={each.title} navigate={each.navigate} />
        ))}
      </Box>
      <IconButton
        sx={{ display: { md: 'none', xs: 'flex' } }}
        aria-label="open drawer"
        onClick={handleOpenDrawer}
      >
        {!openDrawer && <MenuIcon color="secondary" />}
        {openDrawer && <CloseIcon color="secondary" />}
      </IconButton>
    </Box>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ title, navigate }) => {
  return (
    <Link href={navigate} passHref>
      <Box
        sx={{
          height: '100%',
          width: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>{title}</Typography>
      </Box>
    </Link>
  );
};

export default DesktopNavbar;
