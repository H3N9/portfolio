import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectCardDesktopProps {
  reverse: boolean;
}
interface TagToolProps {
  tag: string;
}

const ProjectCardDesktop: React.FC<ProjectCardDesktopProps> = ({ reverse }) => {
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
      <Box sx={{ width: '50%' }}>
        <Box
          sx={{
            width: '100%',
            height: 400,
            bgcolor: 'red',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: reverse ? 'flex-start' : 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
          height: 400,
          width: '50%',
        }}
      >
        <Typography>dsadsa</Typography>
        <Typography variant="h4" pb={1}>
          Project
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
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur. Suspendisse lobortis tempus
            tristique lobortis. Pellentesque sed a diam mauris sed malesuada
            nulla. Tellus pulvinar tincidunt dolor iaculis tempus adipiscing
            quis. Tempus facilisi sagittis sem
          </Typography>
        </Box>
        <Box display="flex">
          {Array.from({ length: 3 }, (_, i) => (
            <TagTool tag={'HTML'} key={i} />
          ))}
        </Box>
        <Box>
          <IconButton aria-label="github">
            <GitHubIcon color="secondary" />
          </IconButton>
          <IconButton aria-label="open new tab">
            <OpenInNewIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const TagTool: React.FC<TagToolProps> = ({ tag }) => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography fontFamily="Roboto">{tag}</Typography>
    </Box>
  );
};

export default ProjectCardDesktop;
