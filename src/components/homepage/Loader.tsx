import { Box, Typography, useTheme } from '@mui/material';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const theme = useTheme();
  const textFading = useRef<HTMLElement>(null);
  const container = useRef<HTMLElement>(null);
  useEffect(() => {
    const animation = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        textFading.current,
        {
          autoAlpha: 0,
          duration: 1,
        },
        { autoAlpha: 1, duration: 1 }
      )
        .repeat(3)
        .yoyo(true)
        .play()
        .then(() => {
          gsap.to(container.current, { autoAlpha: 0 });
        });
    });
    return () => animation.clear();
  }, []);

  return (
    <Box
      ref={container}
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'primary.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: theme.zIndex.appBar + 1,
        position: 'fixed',
      }}
    >
      <Box
        ref={textFading}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'secondary.main',
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          {'RAMIL ARTHAN'}
        </Typography>
        <Typography px={1} component="span" variant="h4" fontWeight={400}>
          |
        </Typography>
        <Typography component="span" variant="h5" fontWeight={400}>
          PORTFOLIO
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
