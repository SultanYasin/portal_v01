'use client';

import { useState, useEffect } from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  menuClasses,
  SubMenu,
} from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { tokens } from '../../theme';

// Import icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactElement;
  selected: string;
  setSelected: (title: string) => void;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link href={to} />}
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography variant="body1">{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const [isMounted, setIsMounted] = useState(false);

  const sidebarStyles = {
    light: {
      bg: colors.primary[900],
      hover: colors.primary[100],
      text: colors.grey[700],
      border: colors.grey[400],
      activeText: colors.grey[900],
      subtitle: colors.grey[500],
    },
    dark: {
      bg: colors.primary[900],
      hover: colors.primary[100],
      text: colors.grey[700],
      border: colors.grey[400],
      activeText: colors.grey[900],
      subtitle: colors.grey[500],
    },
  };

  const currentMode = theme.palette.mode;
  const styles = sidebarStyles[currentMode];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        '& .ps-sidebar-root': {
          border: 'none !important',
          height: '100vh !important',
          backgroundColor: styles.bg,
          transition: 'all 0.2s ease-in-out',
        },
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
          transition: 'all 0.2s ease-in-out !important',
          '&:hover': {
            backgroundColor: `${styles.hover} !important`,
            color: `${styles.activeText} !important`,
          },
        },
        [`& .${menuClasses.button}.active`]: {
          backgroundColor: `${styles.hover} !important`,
          color: `${styles.activeText} !important`,
          borderRight:
            currentMode === 'dark' ? `3px solid ${styles.activeText}` : 'none',
        },
        '& .ps-menu-label': {
          fontSize: '14px',
          color: styles.text,
        },
        // Add a subtle gradient overlay in dark mode
        '&::before':
          currentMode === 'dark'
            ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'linear-gradient(180deg, rgba(10,25,47,0.8) 0%, rgba(10,25,47,1) 100%)',
                pointerEvents: 'none',
              }
            : {},
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          boxShadow:
            currentMode === 'dark' ? '2px 0 10px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: styles.text,
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: styles.text,
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                  }}
                >
                  NAME
                </Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{
                    '&:hover': {
                      backgroundColor:
                        currentMode === 'dark'
                          ? 'rgba(100,255,218,0.1)'
                          : undefined,
                    },
                  }}
                >
                  <MenuOutlinedIcon sx={{ color: styles.text }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER PROFILE */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  width={80}
                  height={80}
                  alt="profile-user"
                  src="/path-to-your-image.jpg"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                    border: `2px solid ${styles.border}`,
                    padding: '2px',
                  }}
                  priority
                />
              </Box>
              <Box textAlign="center" mt="10px">
                <Typography
                  variant="h5"
                  sx={{
                    color: styles.text,
                    fontWeight: 'bold',
                  }}
                >
                  Admin User
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: styles.subtitle,
                    mt: '5px',
                  }}
                >
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{
                m: '15px 0 5px 20px',
                color: colors.grey[500],
                fontWeight: 'bold',
                
              }}
            >
              Data
            </Typography>
            <Item
              title="Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{
                m: '15px 0 5px 20px',
                color: colors.grey[500],
                fontWeight: 'bold',
              }}
            >
              Pages
            </Typography>
            <Item
              title="Profile"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{
                m: '15px 0 5px 20px',
                color: colors.grey[500],
                fontWeight: 'bold',
              }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              label="Analytics"
              icon={<BarChartOutlinedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Performance"
                to="/performance"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarComponent;
