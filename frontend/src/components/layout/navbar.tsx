"use client"

import React, { useState, useEffect } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
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
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease-out',
        py: scrolled ? 0.5 : 1.5,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo with animation */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Royal Rolling Shutter
            </Typography>
          </motion.div>

          {/* Desktop menu with advanced animations */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={RouterLink}
                  to={link.href}
                  sx={{ 
                    color: location.pathname === link.href ? 'primary.main' : "text.primary",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    letterSpacing: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'capitalize',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2,
                      backgroundColor: 'primary.main',
                      transform: location.pathname === link.href ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    }
                  }}
                >
                  {link.name}
                </Button>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
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
                  borderRadius: 2,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(45deg, #1a237e, #3949ab)',
                  '&:hover': {
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                    background: 'linear-gradient(45deg, #3949ab, #1a237e)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Get a Quote
              </Button>
            </motion.div>
          </Box>

          {/* Mobile menu with animations */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
            </motion.div>

            <AnimatePresence>
              {Boolean(anchorElNav) && (
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
                      backdropFilter: 'blur(20px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  MenuListProps={{
                    sx: {
                      py: 0,
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MenuItem 
                        onClick={handleCloseNavMenu} 
                        component={RouterLink} 
                        to={link.href}
                        sx={{
                          py: 1.5,
                          borderLeft: location.pathname === link.href ? '4px solid #1a237e' : 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(26, 35, 126, 0.1)',
                          }
                        }}
                      >
                        <Typography 
                          textAlign="center" 
                          fontWeight={500}
                          color={location.pathname === link.href ? 'primary.main' : 'text.primary'}
                        >
                          {link.name}
                        </Typography>
                      </MenuItem>
                    </motion.div>
                  ))}
                  <Divider />
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
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
                  </motion.div>
                </Menu>
              )}
            </AnimatePresence>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar