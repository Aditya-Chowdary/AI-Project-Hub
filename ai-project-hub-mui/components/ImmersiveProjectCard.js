// components/ImmersiveProjectCard.js
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// Framer Motion variants for staggered animation of children
const cardContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Styled component for the pulsating "Live" dot
const PulsatingDot = styled('div')(({ theme, ownerState }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: ownerState.status === 'Online' ? theme.palette.success.main : theme.palette.error.main,
  boxShadow: `0 0 12px ${ownerState.status === 'Online' ? theme.palette.success.main : theme.palette.error.main}`,
  animation: ownerState.status === 'Online' ? 'pulsate 2s infinite ease-in-out' : 'none',
  '@keyframes pulsate': {
    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
    '50%': { transform: 'scale(1.4)', opacity: 0.7 },
  },
}));

export const ImmersiveProjectCard = ({ project }) => {
  return (
    <Link href={project.status === 'Online' ? `/projects/${project.slug}` : '#'} passHref>
      <Box
        component={motion.div}
        whileHover="hover"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
        }}
        sx={{
          position: 'relative',
          height: '350px',
          borderRadius: 4,
          overflow: 'hidden',
          cursor: project.status === 'Online' ? 'pointer' : 'not-allowed',
          textDecoration: 'none',
          // This creates the 3D tilt effect on hover
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Image Layer */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={{
            hover: { scale: 1.1, transition: { duration: 0.5 } },
          }}
        />

        {/* Gradient Overlay for Readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 4, 40, 0.9) 0%, rgba(0, 4, 40, 0.3) 70%, transparent 100%)',
          }}
        />

        {/* Floating Content Layer */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible" // Animate content when it scrolls into view
          viewport={{ once: true }}
          variants={cardContentVariants}
          sx={{
            position: 'relative',
            height: '100%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Aligns content to the bottom
            color: 'white',
            // This makes the text "pop" out during the 3D tilt
            transform: 'translateZ(50px)',
          }}
        >
          {/* Status Indicator */}
          <Box component={motion.div} variants={itemVariants} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PulsatingDot ownerState={{ status: project.status }} />
            <Typography variant="overline" sx={{ letterSpacing: '1px' }}>
              {project.status}
            </Typography>
          </Box>

          {/* Title */}
          <Typography component={motion.h3} variants={itemVariants} variant="h4" sx={{ fontWeight: 'bold', mb: 1, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {project.title}
          </Typography>

          {/* Description */}
          <Typography component={motion.p} variants={itemVariants} variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {project.description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};