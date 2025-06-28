// components/ScrollingBackground.js
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react'; // We need useRef and useEffect here
import Box from '@mui/material/Box';

const Hexagon = (props) => (
  <svg width="80" height="90" viewBox="0 0 80 90" fill="none" {...props}>
    <path d="M40 0L79.31 22.5V67.5L40 90L0.69 67.5V22.5L40 0Z" stroke="rgba(0, 170, 255, 0.2)" strokeWidth="2" />
  </svg>
);

const Ring = (props) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="50" r="49" stroke="rgba(255, 191, 0, 0.2)" strokeWidth="2" />
  </svg>
);

export const ScrollingBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '500%']); // Moves down very fast
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '150%']); // Moves down slower
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '250%']); // Moves down at medium speed
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -90]); // Rotates as we scroll

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1, 
      }}
    >
      <motion.div style={{ y: y1, position: 'absolute', top: '20%', left: '10%' }}>
        <Hexagon />
      </motion.div>
                 {/* <motion.div style={{ y: y1, position: 'absolute', top: '20%', left: '50%' }}>
        <Ring />
      </motion.div> */}
            <motion.div style={{ y: y1, position: 'absolute', top: '90%', left: '10%' }}>
        <Ring />
      </motion.div>
      <motion.div style={{ y: y2, x: '-50%', position: 'absolute', top: '50%', left: '80%', rotate: rotate1 }}>
        <Ring />
      </motion.div>
      <motion.div style={{ y: y3, position: 'absolute', top: '80%', left: '30%' }}>
        <Hexagon />
      </motion.div>
      <motion.div style={{ y: y2, position: 'absolute', top: '10%', left: '90%' }}>
        <Ring />
      </motion.div>
        <motion.div style={{ y: y2, position: 'absolute', top: '90%', left: '90%' }}>
        <Ring />
      </motion.div>
    </Box>
  );
};