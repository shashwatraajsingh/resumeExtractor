// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// export default function Navbar({ onAbout, onInstructions }) {
//   return (
//     <AppBar position="static" color="primary" sx={{ background: 'linear-gradient(90deg, #1e3a8a 60%, #64748b 100%)' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
//           RESUME SKILL EXTRACTOR
//         </Typography>
//         <IconButton color="inherit" aria-label="usage instructions" onClick={onInstructions}>
//           <HelpOutlineIcon />
//         </IconButton>
//         <IconButton color="inherit" aria-label="about" onClick={onAbout}>
//           <InfoIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// } 

import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  IconButton, 
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Button,
  Divider,
  useScrollTrigger,
  Slide
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsIcon from '@mui/icons-material/Settings';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ onAbout, onInstructions, darkMode = false, onToggleTheme = () => {} }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (callback) => {
    handleClose();
    if (callback) callback();
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          background: darkMode 
            ? 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)' 
            : 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)',
          borderBottom: '1px solid',
          borderColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side - Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
              sx={{ 
                bgcolor: darkMode ? 'primary.dark' : 'white', 
                color: darkMode ? 'white' : 'primary.main',
                mr: 2,
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}
            >
              <DescriptionIcon />
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: 1,
                  textShadow: '0px 2px 4px rgba(0,0,0,0.15)'
                }}
              >
                RESUME SKILL EXTRACTOR
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  opacity: 0.8, 
                  display: { xs: 'none', sm: 'block' },
                  letterSpacing: '0.5px'
                }}
              >
                Extract key skills from your resume instantly
              </Typography>
            </Box>
          </Box>

          {/* Right side - Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Theme Toggle */}
            <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton 
                color="inherit"
                onClick={onToggleTheme}
                sx={{ mr: 1 }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                color="inherit" 
                startIcon={<HelpOutlineIcon />}
                onClick={onInstructions}
                sx={{ 
                  mx: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Instructions
              </Button>
              <Button 
                color="inherit" 
                startIcon={<InfoIcon />}
                onClick={onAbout}
                sx={{ 
                  mx: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                About
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                id="menu-button"
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenu}
                color="inherit"
                size="large"
                sx={{ 
                  ml: 1,
                  background: 'rgba(255,255,255,0.1)',
                  '&:hover': { 
                    background: 'rgba(255,255,255,0.2)' 
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    borderRadius: '12px',
                    minWidth: '200px',
                    mt: 1,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={() => handleMenuItemClick(onInstructions)}>
                  <HelpOutlineIcon fontSize="small" sx={{ mr: 1 }} />
                  Instructions
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(onAbout)}>
                  <InfoIcon fontSize="small" sx={{ mr: 1 }} />
                  About
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleMenuItemClick()}>
                  <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}