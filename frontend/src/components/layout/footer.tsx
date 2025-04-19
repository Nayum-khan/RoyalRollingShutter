"use client"

import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Grid, Typography, Link, Divider, Stack, useTheme } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

const Footer = () => {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              RollMaster
            </Typography>
            <Typography variant="body2" color="grey.400" paragraph>
              Premium rolling shutter solutions for residential and commercial properties.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit" sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                <TwitterIcon />
              </Link>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Link component={RouterLink} to={link.href} sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Our Products
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Aluminum Shutters", "Steel Shutters", "Security Grilles", "Fire Shutters", "Insulated Shutters"].map(
                (product) => (
                  <Box component="li" key={product} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to="/products"
                      sx={{ color: "grey.400", "&:hover": { color: "white" } }}
                    >
                      {product}
                    </Link>
                  </Box>
                ),
              )}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 2, display: "flex", alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ color: theme.palette.primary.main, mr: 1, mt: 0.5 }} />
                <Typography variant="body2" color="grey.400">
                  123 Shutter Street, Rolling Hills, CA 90210
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Link href="tel:+11234567890" sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                  (123) 456-7890
                </Link>
              </Box>
              <Box component="li" sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Link href="mailto:info@rollmaster.com" sx={{ color: "grey.400", "&:hover": { color: "white" } }}>
                  info@rollmaster.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "grey.800", my: 3 }} />

        <Typography variant="body2" color="grey.500" align="center">
          &copy; {currentYear} RollMaster. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
