"use client"

import type React from "react"
import { useState, useEffect } from "react"
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

// CSS for the animated gradient background
const gradientAnimation = `
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`


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
  const location = useLocation()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // Add the gradient animation to the document
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = gradientAnimation
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        py: 1,
        background: `linear-gradient(-45deg, #6c5ce7, #00cec9, #0984e3,hsl(206, 96.60%, 34.90%))`,
        backgroundSize: "300% 300%",
        animation: "gradientAnimation 8s ease infinite",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo for all screens */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Orbitron, sans-serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              "&:hover": {
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "1px 1px 8px rgba(255,255,255,0.5)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Royal Rolling Shutter
          </Typography>

          {/* Desktop menu and CTA */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Button
                  key={link.name}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    textTransform: "capitalize",
                    position: "relative",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      "&::after": {
                        width: "60%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isActive ? "60%" : 0,
                      height: 2,
                      backgroundColor: "white",
                      transition: "width 0.3s ease",
                    },
                  }}
                >
                  {link.name}
                </Button>
              )
            })}
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact"
              sx={{
                ml: 2,
                fontWeight: "bold",
                px: 3,
                py: 1,
                fontSize: "0.95rem",
                letterSpacing: 0.5,
                textTransform: "capitalize",
                backgroundColor: "white",
                color: "#1976d2",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get a Quote
            </Button>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "none",
                  minWidth: 200,
                  background: `linear-gradient(-45deg, #1976d2, #2196f3, #0d47a1, #1565c0)`,
                  backgroundSize: "400% 400%",
                  animation: "gradientAnimation 15s ease infinite",
                },
              }}
              MenuListProps={{
                sx: {
                  py: 0,
                },
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
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <Typography textAlign="center" fontWeight={500}>
                    {link.name}
                  </Typography>
                </MenuItem>
              ))}
              <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
              <MenuItem
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to="/contact"
                sx={{
                  backgroundColor: "white",
                  color: "#1976d2",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
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
