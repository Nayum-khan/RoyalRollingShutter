"use client"

import type React from "react"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ py:1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo for all screens */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: '#1a237e',
              fontFamily: 'Orbitron, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: 2,
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              '&:hover': {
                color: 'primary.main',
              }
            }}
          >
            Royal Rolling Shutter
          </Typography>

          {/* Desktop menu and CTA */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={RouterLink}
                to={link.href}
                sx={{ 
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: 0.5,
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  textTransform: 'capitalize',
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '60%',
                    }
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&.active::after': {
                    width: '60%',
                  }
                }}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/contact"
              sx={{ 
                ml: 2,
                fontWeight: 'bold',
                px: 3,
                py: 1,
                fontSize: '0.95rem',
                letterSpacing: 0.5,
                textTransform: 'capitalize',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get a Quote
            </Button>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  width: '100%',
                  maxWidth: 'none',
                  minWidth: 200,
                },
              }}
              MenuListProps={{
                sx: {
                  py: 0,
                }
              }}
            >
              {navLinks.map((link) => (
                <MenuItem 
                  key={link.name} 
                  onClick={handleCloseNavMenu} 
                  component={RouterLink} 
                  to={link.href}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'primary.contrastText',
                    }
                  }}
                >
                  <Typography textAlign="center" fontWeight={500}>
                    {link.name}
                  </Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem 
                onClick={handleCloseNavMenu} 
                component={RouterLink} 
                to="/contact"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                <Typography textAlign="center" fontWeight="bold">
                  Get a Quote
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar