import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';

interface ReachObject {
  github?: string;
  link?: string;
}

interface ProjectCardDesktopProps {
  reverse: boolean;
  role: string;
  title: string;
  description: string;
  reach: ReachObject;
  stack: Array<string>;
  image: string;
}
interface TagToolProps {
  tag: string;
}

const ProjectCardDesktop: React.FC<ProjectCardDesktopProps> = ({
  reverse,
  title,
  role,
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
        width: '100%',
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        mb: 12.5,
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: 400,
          position: 'relative',
          borderRadius: '5px',
          overflow: 'hidden',
          opacity: 0.5,
          transition: '0.5s',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <Image src={image} layout="fill" alt={title} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: reverse ? 'flex-start' : 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
          height: 400,
          width: '50%',
          zIndex: 2,
        }}
      >
        <Typography>{role}</Typography>
        <Typography variant="h4" pb={1}>
          {title}
        </Typography>
        <Box
          sx={{
            bgcolor: 'rgba(54, 54, 54, 1)',
            p: 2,
            borderRadius: '6px',
            borderShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.25)',
            width: '120%',
          }}
        >
          <Typography variant="h6">{description}</Typography>
        </Box>
        <Box display="flex">
          {stack.map((each, index) => (
            <TagTool tag={each} key={index} />
          ))}
        </Box>
        <Box>
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
    </Box>
  );
};

const TagTool: React.FC<TagToolProps> = ({ tag }) => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography>{tag}</Typography>
    </Box>
  );
};

export default ProjectCardDesktop;
