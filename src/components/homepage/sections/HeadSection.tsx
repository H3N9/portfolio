import { navHeight } from '@components/header/Navbar';
import { Box, Container, IconButton, Typography } from '@mui/material';
import gsap, { SteppedEase } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/dist/TextPlugin';

interface HeadSectionProps {}

const HeadSection: React.FC<HeadSectionProps> = () => {
  const mainText = useRef<HTMLHeadElement>(null);
  const secondaryText = useRef<HTMLHeadElement>(null);
  const cursorTyping = useRef<HTMLHeadElement>(null);
  const namingText = 'RAMIL ARTHAN';

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

  const icons = [
    {
      image: '/static/images/homepage/github-icons.png',
      alt: 'github-icons',
    },
    {
      image: '/static/images/homepage/linkedin-icons.png',
      alt: 'linkedin-icons',
    },
    {
      image: '/static/images/homepage/ig-icons.png',
      alt: 'ig-icons',
    },
  ];
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
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: { md: 'column', xs: 'row' },
            transform: {
              xs: 'translate(-100%, 0%)',
              md: 'translate(0%, 50%)',
            },
            left: { md: 0, xs: '100%' },
            bottom: { xs: 0, md: '50%' },
            p: 1,
          }}
        >
          {icons.map((each, index) => (
            <IconButton key={index}>
              <Image width={23} height={23} alt={each.alt} src={each.image} />
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeadSection;
