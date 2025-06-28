// components/Loader.js
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export const Loader = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '600px',
  }}>
    <CircularProgress color="primary" />
    <Typography sx={{ mt: 2, fontStyle: 'italic' }} color="text.secondary">
      Initializing simulation...
    </Typography>
  </Box>
);