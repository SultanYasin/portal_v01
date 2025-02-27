'use client';
import React from 'react';
import {
  Box,
  IconButton,
  InputBase,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '@/theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState('en'); // 'en' or 'sv'

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang?: string) => {
    if (lang) {
      setLanguage(lang);

    }
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px">
        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            padding: '4px 8px',
          }}
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              fontSize: '1.1rem',
              '& .MuiInputBase-input': {
                padding: '8px 12px',
              },
            }}
            placeholder="Search..."
            inputProps={{
              'aria-label': 'search',
              spellCheck: 'false',
            }}
          />
          <IconButton
            type="submit"
            sx={{
              p: '12px',
              '& svg': {
                fontSize: '1.5rem',
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex" gap={1}>
        {/* Language Toggle */}
        <IconButton
          onClick={handleLanguageClick}
          sx={{
            p: '12px',
            '& svg': {
              fontSize: '1.5rem',
            },
          }}
        >
          <TranslateIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleLanguageClose()}
        >
          <MenuItem onClick={() => handleLanguageClose('en')}>
            🇬🇧 English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageClose('sv')}>
            🇸🇪 Svenska
          </MenuItem>
        </Menu>

        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            p: '12px',
            '& svg': {
              fontSize: '1.5rem',
            },
          }}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
          sx={{
            p: '12px',
            '& svg': {
              fontSize: '1.5rem',
            },
          }}
        >
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            p: '12px',
            '& svg': {
              fontSize: '1.5rem',
            },
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            p: '12px',
            '& svg': {
              fontSize: '1.5rem',
            },
          }}
        >
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
