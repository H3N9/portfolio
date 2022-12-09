import { AppBar, Box, Container, useTheme } from '@mui/material';
import Cursor from '@ui/Cursor';
import IconContact from '@ui/IconContact';
import { baseLang, initLang, setLang } from '@utills/langUtill';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';

const DesktopNavbar = dynamic(() => import('./DesktopNavbar'));
const MobileNavbar = dynamic(() => import('./MobileNavbar'));

interface NavbarProps {
  children: React.ReactNode;
}

export const navHeight = 64;

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { t } = useTranslation('common');
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const [langState, setLangState] = useState(router.locale ?? baseLang.en);
  const appBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initLang(router);
    setLangState(router.locale ?? baseLang.en);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeLang = (newLang: string) => {
    setLang(newLang, router);
    setLangState(newLang);
  };

  useEffect(() => {
    const hideNavbar = gsap
      .from(appBar.current, {
        yPercent: -100,
        duration: 0.3,
      })
      .progress(1);
    ScrollTrigger.create({
      start: 'top top',
      end: `+=${document.body.offsetHeight}`,
      onUpdate: (self) => {
        self.direction === -1 ? hideNavbar.play() : hideNavbar.reverse();
      },
    });
  }, []);

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
        ref={appBar}
        sx={{
          maxHeight: navHeight,
          height: '100%',
          boxShadow: 0,
          bgcolor: 'primary.main',
        }}
      >
        <Container sx={{ height: '100%' }}>
          <DesktopNavbar
            menu={menu}
            handleOpenDrawer={handleDrawer}
            openDrawer={openDrawer}
            langState={langState}
            handleChangeLang={handleChangeLang}
          />
          <MobileNavbar
            zIndex={theme.zIndex.appBar}
            openDrawer={openDrawer}
            handleOpenDrawer={handleDrawer}
            menu={menu}
            spacing={navHeight}
            langState={langState}
            handleChangeLang={handleChangeLang}
          />
        </Container>
      </AppBar>

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
