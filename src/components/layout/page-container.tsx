'use client';

import { Box, useTheme } from '@mui/material';

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.background.default 
            : '#fcfcfc',
        color: theme.palette.text.primary,
        minHeight: '100vh',
        width: '100%',
        transition: 'all 0.3s linear',
      }}
    >
      {children}
    </Box>
  );
}
