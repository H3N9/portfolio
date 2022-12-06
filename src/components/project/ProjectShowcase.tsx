import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ProjectCardDesktop from './ProjectCardDesktop';

interface ProjectShowcaseProps {}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  return (
    <Container>
      <Box py={4} display="flex" alignItems="center">
        <Typography variant="h4">Some things I ve built</Typography>
        <Box
          sx={{ bgcolor: 'secondary.main', width: '30%', height: 2, ml: 3 }}
        />
      </Box>
      <Box>
        {Array.from({ length: 5 }, (_, i) => (
          <ProjectCardDesktop key={i} reverse={!!(i % 2)} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectShowcase;
