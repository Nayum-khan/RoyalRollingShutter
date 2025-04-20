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
          Shop No. 5, behind city point hotel, Palej, Gujarat 392220
          </Typography>
        </InfoRow>

        <InfoRow icon={<PhoneIcon />} title="Phone">
          <Typography variant="body2" color="text.secondary">
            +91-8505091532
          </Typography>
        </InfoRow>

        <InfoRow icon={<EmailIcon />} title="Email">
          <Typography variant="body2" color="text.secondary">
          royalrollingshuttersgujrat@gmail.com
          </Typography>
        </InfoRow>

        <InfoRow icon={<AccessTimeIcon />} title="Business Hours">
          <Typography variant="body2" color="text.secondary">
            Monday - Saturday: 9:00 AM - 7:00 PM
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.49293995529!2d73.07480227505766!3d21.915593279965034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8d2aa531e917%3A0x18cb4e1e08ea35fe!2sRoyal%20Rolling%20Shutters%20%26%20Fabrication%20Works!5e0!3m2!1sen!2sin!4v1745138219098!5m2!1sen!2sin"
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
