
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

export const AnimatedGrid = ({ children }) => {
  return (
    <Grid
      component={motion.div}
      container
      spacing={4}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </Grid>
  );
};