import ThemeRegistry from "@/theme/ThemeRegistry";
import { ScrollingBackground } from "@/components/ScrollingBackground"; 
import Box from "@mui/material/Box"; 

export const metadata = {
  title: "AI Project Hub",
  description: "A showcase of innovative AI projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box>
            <ScrollingBackground />
            <main>{children}</main>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
