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
      borderRadius: 1,
      overflow: "hidden",
    }}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.124478009731!2d73.09194697497577!3d19.01423578217762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d3454270e1%3A0x33fe5e797401d996!2sParvati%20Aangan%20Cooperative%20Housing%20Society%2C%20Plot%20-%2066%2C%20Sector%2021%2C%20Kamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410209!5e0!3m2!1sen!2sin!4v1745077464857!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </Box>
</Paper>
    </Box>
  )
}

export default ContactInfo
