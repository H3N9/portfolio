import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';

interface ReachObject {
  github?: string;
  link?: string;
}

interface ProjectCardMobileProps {
  role: string;
  title: string;
  description: string;
  reach: ReachObject;
  stack: Array<string>;
  image: string;
}

const ProjectCardMobile: React.FC<ProjectCardMobileProps> = ({
  role,
  title,
  description,
  reach,
  stack,
  image,
}) => {
  const handleOpenLink = (link: string | undefined) => {
    window.open(link);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '5px',
        overflow: 'hidden',
        p: 2,
        my: 2,
      }}
    >
      <Image src={image} layout="fill" alt={title} style={{ opacity: 0.2 }} />

      <Typography variant="caption">{role}</Typography>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Box display="flex">
        {stack.map((each, index) => (
          <Typography p={1} key={index}>
            {each}
          </Typography>
        ))}
      </Box>
      <Box display="flex">
        {reach?.github && (
          <IconButton
            onClick={() => handleOpenLink(reach?.github)}
            aria-label="github"
          >
            <GitHubIcon color="secondary" />
          </IconButton>
        )}
        {reach.link && (
          <IconButton
            onClick={() => handleOpenLink(reach?.link)}
            aria-label="open new tab"
          >
            <OpenInNewIcon color="secondary" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ProjectCardMobile;
