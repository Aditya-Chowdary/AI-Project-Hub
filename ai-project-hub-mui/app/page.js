// app/page.js
import { ImmersiveProjectCard } from '@/components/ImmersiveProjectCard';
import { projects } from '@/data/projects';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AnimatedGrid } from '@/components/AnimatedGrid';
import { HeroSection } from '@/components/HeroSection';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function AmazingLandingPage() {
  return (
    <>
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
    </>
  );
}