import { Box, Typography, Paper } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const InfoRow = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
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
      {icon}
    </Box>
    <Box>
      <Typography variant="subtitle1" fontWeight="medium">
        {title}
      </Typography>
      {children}
    </Box>
  </Box>
)

const ContactInfo = () => {
  return (
    <Box>
      <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>

        <InfoRow icon={<LocationOnIcon />} title="Address">
          <Typography variant="body2" color="text.secondary">
            123 Shutter Street, Rolling Hills, CA 90210
          </Typography>
        </InfoRow>

        <InfoRow icon={<PhoneIcon />} title="Phone">
          <Typography variant="body2" color="text.secondary">
            (123) 456-7890
          </Typography>
        </InfoRow>

        <InfoRow icon={<EmailIcon />} title="Email">
          <Typography variant="body2" color="text.secondary">
            info@rollmaster.com
          </Typography>
        </InfoRow>

        <InfoRow icon={<AccessTimeIcon />} title="Business Hours">
          <Typography variant="body2" color="text.secondary">
            Monday - Friday: 9:00 AM - 5:00 PM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saturday: 10:00 AM - 2:00 PM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sunday: Closed
          </Typography>
        </InfoRow>
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
