import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Typography, Button, Stack } from "@mui/material"

const CTA = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 123, 255, 0.1)", // subtle bluish transparent background
        color: "#002244", // dark blue for text
        py: 8,
        backdropFilter: "blur(4px)", // optional: gives smooth look
        borderTop: "1px solid rgba(0, 0, 0, 0.05)", // subtle separator
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Enhance Your Property?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: 800,
            mx: "auto",
            mb: 4,
            opacity: 0.9,
          }}
        >
          Contact us today for a free consultation and quote. Our experts will help you find the perfect rolling shutter
          solution for your needs.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            Get a Free Quote
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/products"
            sx={{
              color: "#002244",
              borderColor: "#002244",
              "&:hover": {
                backgroundColor: "rgba(0, 34, 68, 0.1)",
                borderColor: "#002244",
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
