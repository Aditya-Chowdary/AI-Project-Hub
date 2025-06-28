// theme/theme.js
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFFF', // Deep Sky Blue
    },
    secondary: {
      main: '#9400D3', // Dark Violet
    },
    background: {
      default: '#0a1929', // A dark, rich navy
      paper: '#001e3c', // A slightly lighter navy for cards
    },
    text: {
      primary: '#e3f2fd',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
});

export default theme;