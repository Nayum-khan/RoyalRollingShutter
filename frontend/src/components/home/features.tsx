import { Container, Typography, Box, Paper, SvgIconTypeMap } from "@mui/material"
import { motion } from "framer-motion"
import ShieldIcon from "@mui/icons-material/Shield"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import BoltIcon from "@mui/icons-material/Bolt"
import HomeIcon from "@mui/icons-material/Home"
import BrushIcon from "@mui/icons-material/Brush"
import SettingsIcon from "@mui/icons-material/Settings"
import { useInView } from "react-intersection-observer"
import { OverridableComponent } from "@mui/material/OverridableComponent"

type Feature = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
  }
  title: string
  description: string
  color: string
}

type FeatureCardProps = {
  feature: Feature
  index: number
}

const features: Feature[] = [
  {
    icon: ShieldIcon,
    title: "Enhanced Security",
    description: "Protect your property with our durable and tamper-resistant rolling shutters.",
    color: "#4e54c8",
  },
  {
    icon: WbSunnyIcon,
    title: "Climate Control",
    description: "Reduce energy costs by insulating your home against heat and cold.",
    color: "#f9d423",
  },
  {
    icon: BoltIcon,
    title: "Storm Protection",
    description: "Shield your windows and doors from extreme weather conditions.",
    color: "#a8ff78",
  },
  {
    icon: HomeIcon,
    title: "Privacy",
    description: "Control the visibility into your home or business at the touch of a button.",
    color: "#12c2e9",
  },
  {
    icon: BrushIcon,
    title: "Aesthetic Appeal",
    description: "Choose from a variety of colors and finishes to complement your property.",
    color: "#f64f59",
  },
  {
    icon: SettingsIcon,
    title: "Low Maintenance",
    description: "Our shutters are designed for durability and require minimal upkeep.",
    color: "#c471ed",
  },
]

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ flex: "1 1 360px", maxWidth: "80%" }}
    >
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          height: "100%",
          borderRadius: 3,
          background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
          },
          transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 4,
            background: `linear-gradient(90deg, ${feature.color}, ${feature.color}00)`,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            color: feature.color,
            width: { xs: 48, sm: 56, md: 64 },
            height: { xs: 48, sm: 56, md: 64 },
            borderRadius: "50%",
            mb: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Icon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
          {feature.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
          {feature.description}
        </Typography>
      </Paper>
    </motion.div>
  )
}

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Box className="section-padding" sx={{ background: "rgb(247, 255, 255)", py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.5rem" },
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 4,
                  background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                  borderRadius: 2,
                },
              }}
            >
              Why Choose Our Rolling Shutters
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
                mt: 3,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Our premium rolling shutters offer a perfect blend of functionality, security, and style
              for your property.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, sm: 4 },
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Features
