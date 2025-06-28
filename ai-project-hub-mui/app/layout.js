// app/layout.js
import ThemeRegistry from '@/theme/ThemeRegistry';

export const metadata = {
  title: 'AI Project Hub',
  description: 'A showcase of innovative AI projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeRegistry>
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}