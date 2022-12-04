import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface LinkObject {
  title: string;
  navigate: string;
}

interface DesktopNavbarProps {
  menu: Array<LinkObject>;
}

interface NavLinkProps {
  title: string;
  navigate: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ menu }) => {
  return (
    <Box sx={{ height: '100%', justifyContent: 'flex-end', display: 'flex' }}>
      <Box sx={{ display: 'flex', height: '100%' }}>
        {menu.map((each, index) => (
          <NavLink key={index} title={each.title} navigate={each.navigate} />
        ))}
      </Box>
      {/* <IconButton>
        <MenuIcon />
      </IconButton> */}
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
