import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const container = useRef<HTMLElement>(null);
  const contactContainer = useRef<HTMLElement>(null);

  useEffect(() => {}, []);

  return (
    <Box
      ref={container}
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        bgcolor: 'secondary.main',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '30%',
          bgcolor: 'primary.main',
          position: 'absolute',
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderWidth: 8,
            borderColor: 'secondary.main',
            borderStyle: 'solid',
            mixBlendMode: 'difference',
            height: '70%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>COntacafad</Typography>
            <Typography>COntacafad</Typography>
            <Typography>COntacafad</Typography>
            <Box sx={{ display: 'flex' }}>
              <Button variant="outlined" color="secondary">
                Send Nude
              </Button>
              <Box p={1} />
              <Button variant="outlined" color="secondary">
                Send Nude
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
