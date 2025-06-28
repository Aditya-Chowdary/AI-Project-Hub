// theme/ThemeRegistry.js
'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00EFFF', // A sharp, bright Cyan (the hologram color)
    },
    secondary: {
      main: '#FFFFFF', // Clean white for contrast on secondary actions
    },
    background: {
      default: '#050A19', // A very dark, almost black navy for the base
      paper: 'rgba(0, 239, 255, 0.08)', // Very subtle cyan-tinted glass
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#A0B0C0',
    },
    success: { // Important for the "Online" status dot
      main: '#00FF7F', // Spring Green
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    fontWeightBold: 700,
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