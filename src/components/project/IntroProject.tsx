import { navHeight } from '@components/header/Navbar';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IntroProjectProps {}

const IntroProject: React.FC<IntroProjectProps> = () => {
  return (
    <Box sx={{ width: '100%', height: `calc(100vh - ${navHeight}px)` }}>
      <Container sx={{ height: '100%' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: 128,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              MY project
            </Typography>
            <Typography variant="h6" pt={5}>
              Lorem ipsum dolor sit amet consectetur. At pharetra adipiscing
              tempus nisi massa tellus pharetra nulla. Mauris massa tempus risus
              diam tempor at at nulla nulla. Aenean sem fusce in parturient
              tellus adipiscing a turpis. Ultrices non in eu porta.
            </Typography>
          </Grid>
          <Grid item md={1} />
          <Grid item xs={12} md={6}>
            <Grid container sx={{ height: '90%' }}>
              <Grid
                item
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                }}
              >
                <Image
                  src={'/static/images/project/arrow.png'}
                  alt="arrow"
                  height={216}
                  width={220}
                />
                <Typography>role in project team</Typography>
                <Typography pb={3} variant="h4">
                  Penpal App
                </Typography>
                <Button color="secondary" sx={{ width: 'fit-content' }}>
                  View Project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroProject;
