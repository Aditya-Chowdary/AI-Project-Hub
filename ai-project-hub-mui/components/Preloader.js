// components/Preloader.js
'use client';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// const SystemCheckGrid = styled(Box)({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gap: '16px',
//   marginTop: '32px',
// });
// const SystemCheckItem = ({ icon, label, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4, delay: delay }}
//     style={{ textAlign: 'center' }}
//   >
//     {icon}
//     <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
//       {label}
//     </Typography>
//   </motion.div>
// );


export const Preloader = () => {
  const text = "Welcome to the AI Project Hub!";
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(10px)', // Add a blur on exit
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 4, 40, 0.7)',
        zIndex: -1,
      }} />

      {/* Main Content */}
      <Box sx={{ color: 'white', textAlign: 'center', maxWidth: '80%' }}>
        <Typography
          component={motion.h3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          variant="h1"
          sx={{
            background: 'linear-gradient(45deg, #0AF 30%, #FCB045 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
          }}
        >
          {text.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </Typography>

{/*  
        <SystemCheckGrid>
          <SystemCheckItem
            icon={<motion.div initial={{ color: '#555' }} animate={{ color: '#00EFFF' }} transition={{ duration: 0.5, delay: 1.5, repeat: 1, repeatType: 'reverse' }}>✅</motion.div>}
            label="Connecting..."
            delay={1.5}
          />
          <SystemCheckItem
            icon={<motion.div initial={{ color: '#555' }} animate={{ color: '#00EFFF' }} transition={{ duration: 0.5, delay: 2.0, repeat: 1, repeatType: 'reverse' }}>✅</motion.div>}
            label="Authenticating..."
            delay={2.0}
          />
          <SystemCheckItem
            icon={<motion.div initial={{ color: '#555' }} animate={{ color: '#00EFFF' }} transition={{ duration: 0.5, delay: 2.5, repeat: 1, repeatType: 'reverse' }}>✅</motion.div>}
            label="Loading Modules..."
            delay={2.5}
          />
        </SystemCheckGrid> */}
      </Box>
    </motion.div>
  );
};