
'use client'; 
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImmersiveProjectCard } from '@/components/ImmersiveProjectCard';
import { projects } from '@/data/projects';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AnimatedGrid } from '@/components/AnimatedGrid';
import { HeroSection } from '@/components/HeroSection';
import { AuroraBackground } from '@/components/AuroraBackground';
import { Preloader } from '@/components/Preloader';

export default function AmazingLandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 6500);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <AuroraBackground />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
          <HeroSection />
          <AnimatedGrid>
            {projects.map((project) => (
              <Grid item key={project.slug} xs={12} sm={6} md={4}>
                <ImmersiveProjectCard project={project} />
              </Grid>
            ))}
          </AnimatedGrid>
        </Container>
      </motion.div>
    </>
  );
}