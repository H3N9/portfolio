import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import HeadSection from './sections/HeadSection';
import { Container, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface StoryLineProps {}

const StoryLine: React.FC<StoryLineProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    ScrollTrigger.create({
      trigger: container.current,
      end: `+=${windowHeight * 5} top`,
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <Box sx={{ width: '100%', height: 'fit-content' }}>
      <HeadSection />
      <Box height={400} width="100%" />
      <Box
        ref={container}
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'red',
        }}
      >
        {/* <Box
          sx={{
            width: '100%',
            height: '50vh',
            transform: 'skew(-20deg) rotate(-20deg)',
            bgcolor: 'secondary.main',
            position: 'absolute',
          }}
        />
        <Container
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '80%' },
              height: '60%',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mixBlendMode: 'difference',
                pb: 2,
              }}
            >
              Experiences
            </Typography>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                boxShadow: '0px 4px 40px 15px rgba(0, 0, 0, 0.25)',
                width: '100%',
                height: '90%',
                display: 'flex',
                p: 4,
              }}
            >
              <Box>
                <Image
                  src="/static/images/homepage/computer.svg"
                  alt="computer"
                  width={43}
                  height={52}
                />
                <Box
                  sx={{
                    height: 'calc(100% - 52px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#BABABA',
                  }}
                >
                  <Typography>{'<h3>'}</Typography>
                  <Box
                    sx={{
                      height: 'calc(100% - 48px)',
                      width: '1px',
                      bgcolor: '#BABABA',
                    }}
                  />
                  <Typography>{'</h3>'}</Typography>
                </Box>
              </Box>
              <Box sx={{ color: 'primary.main', pl: 3 }}>
                <Typography sx={{ height: 52 }} variant="h4">
                  Title
                </Typography>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry is
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container> */}
      </Box>
      <Box height={400} width="100%" />
    </Box>
  );
};

export default StoryLine;
