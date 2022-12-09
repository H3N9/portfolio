import { Box, Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SummaryProps {
  container: React.RefObject<HTMLElement>;
  textFading: React.RefObject<HTMLElement>;
}

const Summary: React.FC<SummaryProps> = ({ container, textFading }) => {
  const { t } = useTranslation('homepage');
  const router = useRouter();
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 3,
        opacity: 0,
      }}
      ref={container}
    >
      <Container sx={{ height: '100%' }}>
        <Box
          ref={textFading}
          width="100%"
          height="100%"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography align="center" sx={{ fontSize: { xs: 24, md: 60 } }}>
            {t('conclusion.title')}
          </Typography>
          <Typography align="center" sx={{ fontSize: { xs: 20, md: 48 } }}>
            {t('conclusion.persuade')}
          </Typography>
          <Box
            display="flex"
            sx={{
              width: '100%',
              justifyContent: 'center',
              pt: 4,
            }}
          >
            <Button
              onClick={() => router.push('/project')}
              variant="text"
              color="secondary"
            >
              {t('conclusion.see-more-project')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Summary;
