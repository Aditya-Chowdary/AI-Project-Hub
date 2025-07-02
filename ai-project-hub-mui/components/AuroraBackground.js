import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Box from '@mui/material/Box';

export const AuroraBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a smoothed motion value for a lagging effect
  const smoothX = useTransform(mouseX, (value) => value, { damping: 50, stiffness: 400 });
  const smoothY = useTransform(mouseY, (value) => value, { damping: 50, stiffness: 400 });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(0, 170, 255, 0.3) 0%, rgba(0, 170, 255, 0) 60%)',
          filter: 'blur(100px)',
        }}
      />
    </Box>
  );
};