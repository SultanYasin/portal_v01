'use client';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

type AppLayoutProps = {
  children: React.ReactNode;
  navbar: React.ReactNode;
};

export default function AppLayout({ children, navbar }: AppLayoutProps) {
  const theme = useTheme();
  
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      {navbar}
      <main>{children}</main>
    </Box>
  );
} 