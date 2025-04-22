import { Box, Container, Typography, Paper, Button, Stack, Avatar } from "@mui/material"
import PageHeader from "../components/ui/pageHeader"
import { Link as RouterLink } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Juber Pathan",
      role: "Founder",
      experience: "15+ years",
      contact: "+91 8505091532", // Added contact number
      image: "./images/juber.jpeg",
    },
    {
      name: "Sarfraz Pathan",
      role: "Manager",
      experience: "10+ years",
      contact: "+91 8107034936", // Added contact number
      image: "./images/sarfraz.jpeg",
    },
    {
      name: "Abbas Pathan",
      role: "Partner",
      experience: "5+ years",
      contact: "+91 9079190133", // Added contact number
      image: "./images/abbas.jpeg",
    },
  ]

  return (
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <PageHeader
          title="About Royal Rolling Shutter"
          description="Delivering premium rolling shutter solutions since 2015."
        />

        {/* Section: Story + Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 4,
          }}
        >
          <Box flex={1}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2015, Royal Rolling Shutter has grown from a small family business to one of the leading providers of
              rolling shutter solutions in the region.
            </Typography>
            <Typography paragraph>
              Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
              We take pride in offering products that not only enhance the security and energy efficiency of your
              property but also add to its aesthetic appeal.
            </Typography>
            <Typography paragraph>
              With a team of experienced professionals and state-of-the-art manufacturing facilities, we ensure that
              every product that leaves our factory meets the highest standards of quality and durability.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2 }}
              component={RouterLink}
              to="/contact"
            >
              Contact Our Team
            </Button>
          </Box>

          <Box flex={1}>
            <Box
              component="img"
              src="/images/p1.png"
              alt="Royal Rolling Shutter"
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>

        {/* Section: Our Team */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="h6" align="center" color="rgb(77, 10, 10)" sx={{ mb: 4 }}>
            Meet the experts behind Royal Rolling Shutter
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 4 }}
            sx={{ mt: 2 }}
          >
            {teamMembers.map((member, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  p: { xs: 1.5, md: 4 },
                  flex: 1,
                  minWidth: { xs: 'auto', md: 300 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: { md: "translateY(-5px)" },
                    boxShadow: { md: 3 },
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 220,
                    height: 220,
                    mb: { xs: 1.5, md: 3 },
                    border: '3px solid',
                    borderColor: 'primary.main',
                    '@media (max-width: 400px)': {
                      width: 180,
                      height: 180,
                    }
                  }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {member.role}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  {member.experience}
                </Typography>
                {/* Added contact number with click-to-call link */}
                <Typography variant="body1" sx={{ mt: 1, color: 'primary.main' }}>
                  <a 
                    href={`tel:${member.contact.replace(/\s+/g, '')}`} 
                    style={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {member.contact}
                  </a>
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutPage