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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
}
