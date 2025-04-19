import { Box, Typography, Paper, Grid } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const ContactInfo = () => {
  return (
    <Box>
      <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Shutter Street, Rolling Hills, CA 90210
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (123) 456-7890
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  info@rollmaster.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccessTimeIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  Business Hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Saturday: 10:00 AM - 2:00 PM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={1} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Location
        </Typography>
        <Box
          sx={{
            mt: 2,
            height: 300,
            bgcolor: "grey.100",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          Google Maps Embed
        </Box>
      </Paper>
    </Box>
  )
}

export default ContactInfo
