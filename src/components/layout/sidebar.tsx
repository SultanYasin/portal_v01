'use client';

import { useState, useEffect } from 'react';
import {
  Sidebar as ProSidebar,
  Menu, MenuItem,menuClasses, SubMenu,} from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { tokens } from '../../theme';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

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
        color: colors.grey[500],
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);}, []);

  if (!isMounted) {return null;}

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

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
          backgroundColor: 'white',
        },
        '& .ps-menu-button:hover': {
          backgroundColor: 'transparent !important',
          color: '#868dfb !important',
        },
        [`& .${menuClasses.button}.active`]: {
          backgroundColor: 'transparent !important',
          color: '#6870fa !important',
        },
      }}
    > 

      {/* ---------sidebar color ---------- */}
      <ProSidebar collapsed={isCollapsed} style={{ height: '100%' }}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={handleCollapse}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',

              color: colors.grey[900],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={handleCollapse}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  width={100}
                  height={100}
                  alt="profile-user"
                  src="/path-to-your-image.jpg"
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                  priority
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  sx={{ m: '10px 0 0 0' }}
                >
                  test testesson
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
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
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{ m: '15px 0 5px 20px' }}
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

            <SubMenu label="SUB" icon={<BarChartOutlinedIcon style={{color:"gray"}}/>}>
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
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
