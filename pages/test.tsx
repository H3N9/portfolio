import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface testProps {}

const Test: React.FC<testProps> = () => {
  const box1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(box1.current, {
      yPercent: 100,
      scrollTrigger: {
        trigger: box1.current,
        pin: true,

        end: '+=300',
        markers: true,
        start: 'top top',
      },
    });
  }, []);
  return (
    <Box sx={{ height: '300vh', width: '100vw' }}>
      <Box ref={box1} width="100px" height="100px" bgcolor="red" />
    </Box>
  );
};

export default Test;
