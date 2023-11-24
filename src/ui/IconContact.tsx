import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, IconButton } from '@mui/material';

interface IconContactProps {
  zIndex: number;
}

const IconContact: React.FC<IconContactProps> = ({ zIndex }) => {
  const [leftSize, setLeftSize] = useState(0);

  useEffect(() => {
    const leftSize = (): void => {
      const sizing = (window.innerWidth - 1400) / 2;

      if (sizing > 0) setLeftSize(sizing);
    };
    window.addEventListener('resize', leftSize);
    leftSize();
    return () => window.removeEventListener('resize', leftSize);
  }, []);

  const icons = [
    {
      icon: <GitHubIcon fontSize="large" />,
      alt: 'github-icons',
      action: () => window.open('https://github.com/H3N9'),
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      alt: 'linkedin-icons',
      action: () =>
        window.open('https://www.linkedin.com/in/ramil-arthan-397349170/'),
    },
    {
      icon: <FacebookIcon fontSize="large" />,
      alt: 'email-icons',
      action: () => window.open('https://www.facebook.com/ramilh3n9'),
    },
  ];
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: { md: 'column', xs: 'row' },
        transform: {
          xs: 'translate(-100%, 0%)',
          md: 'translate(0%, 50%)',
        },
        left: { md: leftSize, xs: '100%' },
        bottom: { xs: 0, md: '50%' },
        p: 1,
        zIndex: zIndex - 2,
        mixBlendMode: 'difference',
      }}
    >
      {icons.map((each, index) => (
        <IconButton
          onClick={each.action}
          key={index}
          aria-label={each.alt}
          sx={{ color: 'white' }}
        >
          {each.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default IconContact;
