import { Box, Container, Typography, useTheme } from '@mui/material';
import gsap, { SteppedEase } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface HeadSectionProps {}

const HeadSection: React.FC<HeadSectionProps> = () => {
  const mainText = useRef<HTMLHeadElement>(null);
  const secondaryText = useRef<HTMLHeadElement>(null);
  const cursorTyping = useRef<HTMLHeadElement>(null);
  const mouseScroll = useRef<HTMLElement>(null);
  const namingText = 'RAMIL ARTHAN';

  useEffect(() => {
    const contextAnimation = gsap.context(() => {
      gsap.registerPlugin(TextPlugin);
      const typingAnimate = gsap.timeline();
      const cursorAnimate = gsap.timeline();
      const mouseScrollChild = mouseScroll.current?.firstChild;
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
      gsap.to(mouseScrollChild || [], {
        y: 10,
        repeat: -1,
        duration: 1,
        yoyo: true,
      });
    });
    return () => contextAnimation.clear();
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'primary.main',
        position: 'relative',
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
      <Box
        ref={mouseScroll}
        sx={{
          width: 40,
          height: 75,
          borderWidth: 5,
          borderStyle: 'solid',
          borderColor: 'secondary.main',
          position: 'absolute',
          bottom: '10%',
          borderRadius: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};

export default HeadSection;
