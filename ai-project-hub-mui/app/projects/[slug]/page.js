'use client'; 
import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProjectViewerPage({ params }) {
  const [isLoading, setIsLoading] = useState(true);
  const project = projects.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (!project) {
      notFound();
    }
  }, [project]);

  if (!project) {
    return null; 
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3,text }}>
        Home
      </Button>
      <Typography variant="h3" component="h1" gutterBottom>
        {project.title}
      </Typography>
      <Paper
        elevation={12}
        sx={{
          width: '100%',
          height: 'calc(100vh - 200px)', 
          minHeight: '600px',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        {isLoading && <Loader />}
        <motion.iframe
          src={project.embedUrl}
          title={project.title}
          style={{
            border: '0',
            width: '100%',
            height: '100%',
            display: isLoading ? 'none' : 'block',
          }}
          onLoad={() => setIsLoading(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </Paper>
    </Container>
  );
}