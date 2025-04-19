import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Typography, Button, Stack } from "@mui/material"

const Hero = () => {
  return (
    <Box
      className="hero-section"
      sx={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        py: { xs: 8, md: 12, lg: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              lineHeight: 1.2,
            }}
          >
            Premium Rolling Shutters for Modern Homes
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              mb: 4,
              color: "grey.100",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Enhance security, privacy, and energy efficiency with our premium rolling shutter solutions. Custom-designed
            for your specific needs.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained" color="primary" size="large" component={RouterLink} to="/products">
              Explore Products
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Get a Quote
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
