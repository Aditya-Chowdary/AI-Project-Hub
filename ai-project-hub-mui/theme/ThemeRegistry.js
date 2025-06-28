// theme/ThemeRegistry.js
'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

// This is the complete, working theme object
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
  // By defining a typography object, CssBaseline will find what it needs
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 700, // Explicitly defining what it was missing
  },
});


export default function ThemeRegistry({ children }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline now has a full theme to work with and will not crash */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}