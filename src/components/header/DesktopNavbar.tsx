import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import { emailUtil } from '@utills/utills';
import BtnLang from './BtnLang';

interface LinkObject {
  title: string;
  navigate: string;
}

type HandleOpenDrawer = () => void;
type HandleChangeLang = (lang: string) => void;

interface DesktopNavbarProps {
  menu: Array<LinkObject>;
  handleOpenDrawer: HandleOpenDrawer;
  openDrawer: boolean;
  langState: string;
  handleChangeLang: HandleChangeLang;
}

interface NavLinkProps {
  title: string;
  navigate: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  menu,
  handleOpenDrawer,
  openDrawer,
  langState,
  handleChangeLang,
}) => {
  return (
    <Box
      sx={{ height: '100%', justifyContent: 'space-between', display: 'flex' }}
    >
      <Box
        sx={{
          '&:hover': {
            '& div': {
              width: '100%',
            },
          },
        }}
      >
        <a
          href={emailUtil.send}
          target="_blank"
          rel="noreferrer"
          style={{ height: '100%', display: 'flex', alignItems: 'center' }}
        >
          <EmailIcon />
          <Typography
            sx={{
              position: 'relative',
            }}
            pl={1}
            variant="h6"
          >
            {emailUtil.email}
            <Box
              sx={{
                transition: '0.5s',
                width: 0,
                height: '2px',
                position: 'absolute',
                bgcolor: 'secondary.main',
              }}
            />
          </Typography>
        </a>
      </Box>

      <Box sx={{ display: { md: 'flex', xs: 'none' }, height: '100%' }}>
        {menu.map((each, index) => (
          <NavLink key={index} title={each.title} navigate={each.navigate} />
        ))}
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BtnLang langState={langState} handleChangeLang={handleChangeLang} />
        </Box>
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
          px: 5,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',

          '&:hover': {
            '& div': {
              width: '100%',
            },
          },
        }}
      >
        <Typography pr={2}>{'//'}</Typography>
        <Typography
          sx={{ position: 'relative' }}
          textAlign="center"
          variant="h6"
        >
          {title}
          <Box
            sx={{
              transition: '0.5s',
              width: 0,
              height: '2px',
              position: 'absolute',
              bgcolor: 'secondary.main',
            }}
          />
        </Typography>
      </Box>
    </Link>
  );
};

export default DesktopNavbar;
