import { Box, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CursorProps {}

const Cursor: React.FC<CursorProps> = () => {
  const theme = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);
  const space = 10;

  const handleCursor = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    gsap.to(cursorRef.current, {
      top: clientY - space,
      left: clientX - space,
      width: 25,
      height: 25,
    });
  };

  const handleLeavingCoursor = () => {
    gsap.to(cursorRef.current, {
      width: 0,
      height: 0,
    });
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleCursor);
    document.body.addEventListener('mouseleave', handleLeavingCoursor);
    return () => {
      document.body.removeEventListener('mousemove', handleCursor);
      document.body.removeEventListener('mouseleave', handleLeavingCoursor);
    };
  }, []);
  return (
    <Box
      ref={cursorRef}
      sx={{
        bgcolor: 'secondary.main',
        position: 'fixed',
        zIndex: theme.zIndex.appBar + 1,
        borderRadius: '50%',
        mixBlendMode: 'difference',
        width: 25,
        height: 25,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Cursor;
