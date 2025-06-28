
import Link from 'next/link';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

// Main Card Component
export const ImmersiveProjectCard = ({ project }) => {
  return (
    // The animation is now controlled by this motion.div itself
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the card is visible
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Link
        href={project.status === 'Online' ? `/projects/${project.slug}` : '#'}
        passHref
        legacyBehavior
      >
        <Box
          component={motion.a}
          whileHover={{ scale: 1.05 }} // A simple, clean hover effect
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
            position: 'relative',
            height: '350px',
            borderRadius: 4,
            overflow: 'hidden',
            cursor: project.status === 'Online' ? 'pointer' : 'not-allowed',
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
            whileHover={{ scale: 1.15 }} // Enhanced background zoom on hover
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
            sx={{
              position: 'relative',
              height: '100%',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            {/* Status Indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PulsatingDot ownerState={{ status: project.status }} />
              <Typography variant="overline" sx={{ letterSpacing: '1px' }}>
                {project.status}
              </Typography>
            </Box>

            {/* Title */}
            <Typography component="h3" variant="h4" sx={{ fontWeight: 'bold', mb: 1, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {project.title}
            </Typography>

            {/* Description */}
            <Typography component="p" variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {project.description}
            </Typography>
          </Box>
        </Box>
      </Link>
    </motion.div>
  );
};