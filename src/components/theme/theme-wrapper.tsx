'use client';

import { ColorModeContext, useMode } from '@/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
