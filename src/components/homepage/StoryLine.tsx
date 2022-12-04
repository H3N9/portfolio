import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Box } from '@mui/system';
import HeadSection from './sections/HeadSection';

interface StoryLineProps {}

const StoryLine: React.FC<StoryLineProps> = () => {
  useEffect(() => {}, []);
  return (
    <Box sx={{ width: '100%' }}>
      <HeadSection />
    </Box>
  );
};

export default StoryLine;
