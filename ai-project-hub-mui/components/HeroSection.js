// components/HeroSection.js
'use client';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const HeroSection = () => {
  return (
    <Box
      component={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      sx={{ textAlign: 'center', py: 10 }}
    >
      <Typography component={motion.h1} variants={item} variant="h1" sx={{
        mb: 2,
        background: 'linear-gradient(45deg, #0AF 30%, #FCB045 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
         The AI Project Hub
      </Typography>
      <Typography component={motion.p} variants={item} variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
        A unified dashboard showcasing next-generation AI projects, running live and ready for interaction.
      </Typography>
      <motion.div variants={item}>
        {/* <Button variant="contained" size="large" endIcon={<RocketLaunchIcon />}>
          Explore Projects
        </Button> */}
      </motion.div>
    </Box>
  );
};