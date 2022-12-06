import { navHeight } from '@components/header/Navbar';
import { Box, Container, Typography, useTheme } from '@mui/material';
import gsap, { SteppedEase } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/dist/TextPlugin';

interface HeadSectionProps {}

const HeadSection: React.FC<HeadSectionProps> = () => {
  const mainText = useRef<HTMLHeadElement>(null);
  const secondaryText = useRef<HTMLHeadElement>(null);
  const cursorTyping = useRef<HTMLHeadElement>(null);
  const namingText = 'RAMIL ARTHAN';
  const theme = useTheme();

  useEffect(() => {
    const contextAnimation = gsap.context(() => {
      gsap.registerPlugin(TextPlugin);
      const typingAnimate = gsap.timeline();
      const cursorAnimate = gsap.timeline();
      typingAnimate
        .to(mainText.current, {
          delay: 1,
          duration: 3,
          ease: 'none',
          text: { value: namingText },
        })
        .to(secondaryText.current, {
          yPercent: -10,
          duration: 0.8,
          opacity: 1,
        });
      cursorAnimate.fromTo(
        cursorTyping.current,
        {
          autoAlpha: 0,
        },
        { autoAlpha: 1, repeat: -1, ease: SteppedEase.config(1) }
      );
    });
    return () => contextAnimation.clear();
  }, []);

  return (
    <Box
      sx={{
        height: `calc(100vh - ${navHeight}px)`,
        width: '100vw',
        bgcolor: 'primary.main',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box display="flex" mb={1}>
            <Typography
              ref={mainText}
              sx={{
                fontSize: `clamp(20px, 10vw, 128px)`,
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            />
            <Typography
              ref={cursorTyping}
              sx={{ fontSize: `clamp(22px, 10vw, 128px)`, lineHeight: 1 }}
            >
              |
            </Typography>
          </Box>

          <Typography
            sx={{ opacity: 0, fontSize: 'clamp(20px, 1.8vw, 40px)' }}
            ref={secondaryText}
          >
            SOFTWARE ENGINEER & FRONT END DEVELOPER.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadSection;
