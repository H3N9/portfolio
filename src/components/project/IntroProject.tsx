/* eslint-disable @next/next/no-img-element */
import { navHeight } from '@components/header/Navbar';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface IntroProjectProps {}

const IntroProject: React.FC<IntroProjectProps> = () => {
  const { t } = useTranslation('project');
  return (
    <Box
      sx={{
        width: '100%',
        mt: 6,
      }}
    >
      <Container sx={{ marginTop: { md: 0, xs: navHeight } }}>
        <Grid container sx={{ minHeight: '100vh' }}>
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
                fontSize: { md: 128, xs: 32 },
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {t('title')}
            </Typography>
            <Typography variant="h6" pt={5}>
              {t('show-case.description')}
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
                pb: 10,
              }}
            >
              <Box display="flex" alignItems="flex-end" width={1}>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <img
                    src={'/static/images/project/arrow.png'}
                    alt="arrow"
                    style={{
                      width: '220px',
                      height: '216px',
                    }}
                  />
                </Box>

                <img
                  style={{
                    maxWidth: 'clamp(300px, 100%, 450px)',
                    objectFit: 'contain',
                  }}
                  src={'/static/images/project/2.gif'}
                  alt="Penpal"
                />
              </Box>
              <Typography>{t('show-case.role')}</Typography>
              <Typography pb={3} variant="h4">
                {t('show-case.title')}
              </Typography>
              <Button
                onClick={() => window.open('https://github.com/H3N9/PenPals')}
                color="secondary"
                sx={{ width: 'fit-content' }}
              >
                {t('show-case.viewing')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroProject;
