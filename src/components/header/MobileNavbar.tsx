import { Box, Divider, Drawer, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface LinkObject {
  title: string;
  navigate: string;
}

interface MobileNavbarProps {
  menu: Array<LinkObject>;
  spacing: number;
}

interface MenuDrawer {
  title: string;
  navigate: string;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menu, spacing }) => {
  const theme = useTheme();
  return (
    <Drawer open={true} anchor="top" sx={{ zIndex: theme.zIndex.appBar - 1 }}>
      <Box height={spacing} />
      <Box sx={{ width: '100%' }}>
        {menu.map((each, index) => (
          <MenuDrawer key={index} title={each.title} navigate={each.navigate} />
        ))}
      </Box>
    </Drawer>
  );
};

const MenuDrawer: React.FC<MenuDrawer> = ({ title, navigate }) => {
  return (
    <Link passHref href={navigate}>
      <Box sx={{ width: '100vw', p: 2 }}>
        <Typography>{title}</Typography>
      </Box>
      <Divider />
    </Link>
  );
};

export default MobileNavbar;
