import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export type ColorMode = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorMode>({
  toggleColorMode: () => {},
});

export const tokens = (mode: 'light' | 'dark') => ({
  ...(mode === 'dark'
    ? {
        primary: {
          100: '#cce4f6',
          200: '#99c9ed',
          300: '#66afe5',
          400: '#3394dc',
          500: '#1976d2',
          600: '#145ea8',
          700: '#0f477e',
          800: '#0a2f54',
          900: '#05182a',
        },
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
        },
        success: {
          main: '#4caf50',
          light: '#81c784',
          dark: '#388e3c',
        },
        warning: {
          main: '#ff9800',
          light: '#ffb74d',
          dark: '#f57c00',
        },
        error: {
          main: '#f44336',
          light: '#e57373',
          dark: '#d32f2f',
        },
      }
    : {
        primary: {
          100: '#05182a',
          200: '#0a2f54',
          300: '#0f477e',
          400: '#145ea8',
          500: '#1976d2',
          600: '#3394dc',
          700: '#66afe5',
          800: '#99c9ed',
          900: '#cce4f6',
        },
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
        },
        success: {
          main: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20',
        },
        warning: {
          main: '#ed6c02',
          light: '#ff9800',
          dark: '#e65100',
        },
        error: {
          main: '#d32f2f',
          light: '#ef5350',
          dark: '#c62828',
        },
      }),
});

export const useMode = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...tokens(mode),
        },
      }),
    [mode]
  );

  return [theme, colorMode] as const;
};
