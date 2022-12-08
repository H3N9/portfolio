import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'react-i18next';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useTranslation('homepage');
  const container = useRef<HTMLElement>(null);
  const contactContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const animation = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(contactContainer.current, {
        yPercent: -100,
        duration: 1,
        autoAlpha: 0,
      });
      ScrollTrigger.create({
        trigger: container.current,
        markers: true,
        start: '+=20% center',
        animation: tl,
      });
    });
    return () => animation.clear();
  }, []);

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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          ref={contactContainer}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderWidth: 8,
            borderColor: 'secondary.main',
            borderStyle: 'solid',
            mixBlendMode: 'difference',
            height: '70%',
            width: 'clamp(300px, 100%, 1200px)',
            m: 2,
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
            <Typography variant="h4">{t('contact.title')}</Typography>
            <Typography variant="h2" textAlign="center">
              {t('contact.key-title')}
            </Typography>
            <Typography>{t('contact.description')}</Typography>
            <Box sx={{ display: 'flex', py: 3 }}>
              <Button variant="outlined" color="secondary" sx={{ width: 150 }}>
                {t('contact.send-email')}
              </Button>
              <Box p={1} />
              <Button variant="outlined" color="secondary" sx={{ width: 150 }}>
                {t('contact.resume')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
