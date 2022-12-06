import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Box, IconButton } from '@mui/material';

interface IconContactProps {
  zIndex: number;
}

const IconContact: React.FC<IconContactProps> = ({ zIndex }) => {
  const icons = [
    {
      icon: <GitHubIcon fontSize="large" />,
      alt: 'github-icons',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      alt: 'linkedin-icons',
    },
    {
      icon: <EmailIcon fontSize="large" />,
      alt: 'email-icons',
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
        left: { md: 0, xs: '100%' },
        bottom: { xs: 0, md: '50%' },
        p: 1,
        zIndex: zIndex - 2,
        mixBlendMode: 'difference',
      }}
    >
      {icons.map((each, index) => (
        <IconButton key={index} aria-label={each.alt} sx={{ color: 'white' }}>
          {each.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default IconContact;
