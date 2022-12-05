import { Box, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CursorProps {}

const Cursor: React.FC<CursorProps> = () => {
  const [cursorAtt, setCursorAtt] = useState({
    top: 0,
    left: 0,
    width: 30,
    height: 30,
  });
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
    window.addEventListener('pointermove', handleCursor);
    document.body.addEventListener('mouseleave', handleLeavingCoursor);
    return () => {
      window.removeEventListener('pointermove', handleCursor);
      document.body.removeEventListener('mouseleave', handleLeavingCoursor);
    };
  }, []);
  return (
    <Box
      ref={cursorRef}
      sx={{
        bgcolor: 'white',
        position: 'fixed',
        zIndex: theme.zIndex.appBar + 1,
        borderRadius: '50%',
        mixBlendMode: 'difference',
        width: 25,
        height: 25,
      }}
    />
  );
};

export default Cursor;
