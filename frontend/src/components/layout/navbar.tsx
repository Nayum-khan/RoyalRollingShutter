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
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
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
  }}
>
  Royal Rolling Shutter
</Typography>


          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.name} onClick={handleCloseNavMenu} component={RouterLink} to={link.href}>
                  <Typography textAlign="center">{link.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Roll<span style={{ color: theme.palette.primary.main }}>Master</span>
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={RouterLink}
                to={link.href}
                onClick={handleCloseNavMenu}
                sx={{ mx: 1, color: "text.primary", display: "block" }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* CTA Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/contact"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Get a Quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
