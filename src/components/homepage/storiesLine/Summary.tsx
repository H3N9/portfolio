import { Box, Container, Typography } from '@mui/material';
import React from 'react';

interface SummaryProps {
  container: React.RefObject<HTMLElement>;
  textFading: React.RefObject<HTMLElement>;
}

const Summary: React.FC<SummaryProps> = ({ container, textFading }) => {
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
          }}
        >
          <Typography align="center" sx={{ fontSize: { xs: 24, sm: 60 } }}>
            dsadas
          </Typography>
          <Typography align="center" sx={{ fontSize: { xs: 24, md: 60 } }}>
            dsadas
          </Typography>
          <Box
            display="flex"
            sx={{
              width: '100%',
              justifyContent: 'center',
              pt: 4,
            }}
          >
            <Typography>dasda</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Summary;
