import IntroProject from '@components/project/IntroProject';
import ProjectShowcase from '@components/project/ProjectShowcase';
import { Box } from '@mui/material';
import React from 'react';

const Project = () => {
  return (
    <Box>
      <IntroProject />
      <ProjectShowcase />
    </Box>
  );
};

export default Project;
