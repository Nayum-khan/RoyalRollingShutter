import { Container, Typography, Box, Paper } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import BoltIcon from "@mui/icons-material/Bolt"
import HomeIcon from "@mui/icons-material/Home"
import BrushIcon from "@mui/icons-material/Brush"
import SettingsIcon from "@mui/icons-material/Settings"

const features = [
  {
    icon: ShieldIcon,
    title: "Enhanced Security",
    description: "Protect your property with our durable and tamper-resistant rolling shutters.",
  },
  {
    icon: WbSunnyIcon,
    title: "Climate Control",
    description: "Reduce energy costs by insulating your home against heat and cold.",
  },
  {
    icon: BoltIcon,
    title: "Storm Protection",
    description: "Shield your windows and doors from extreme weather conditions.",
  },
  {
    icon: HomeIcon,
    title: "Privacy",
    description: "Control the visibility into your home or business at the touch of a button.",
  },
  {
    icon: BrushIcon,
    title: "Aesthetic Appeal",
    description: "Choose from a variety of colors and finishes to complement your property.",
  },
  {
    icon: SettingsIcon,
    title: "Low Maintenance",
    description: "Our shutters are designed for durability and require minimal upkeep.",
  },
]

const Features = () => {
  return (
    <Box className="section-padding">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            Why Choose Our Rolling Shutters
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Our premium rolling shutters offer a perfect blend of functionality, security, and style
            for your property.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  flex: "1 1 300px",
                  p: 3,
                  maxWidth: "calc(33.333% - 24px)",
                  minWidth: "280px",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "primary.light",
                    color: "primary.main",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    mb: 2,
                  }}
                >
                  <Icon />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Features
