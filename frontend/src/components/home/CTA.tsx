import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Typography, Button, Stack } from "@mui/material"

const CTA = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Enhance Your Property?
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mb: 4, opacity: 0.9 }}>
          Contact us today for a free consultation and quote. Our experts will help you find the perfect rolling shutter
          solution for your needs.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/contact">
            Get a Free Quote
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/products"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Explore Products
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default CTA
