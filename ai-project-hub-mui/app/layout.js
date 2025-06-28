// app/layout.js
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ScrollingBackground } from '@/components/ScrollingBackground'; // Import our new component
import Box from '@mui/material/Box'; // Import Box for styling

export const metadata = {
  title: 'AI Project Hub',
  description: 'A showcase of innovative AI projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* This Box acts as our main page container */}
          <Box
            sx={{
              // This is our main background gradient. The SVG shapes will float on top of this.
              background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
              position: 'relative', // CRUCIAL: The parent must be relative for z-index to work
              zIndex: 0,
            }}
          >
            {/* The parallax background component. It will be fixed behind everything. */}
            <ScrollingBackground />

            {/* Your main page content is rendered here, on top of the background. */}
            <main>{children}</main>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}