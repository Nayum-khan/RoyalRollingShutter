import { Box, Container, Typography, Paper, Button, Stack } from "@mui/material"
import PageHeader from "../components/ui/pageHeader"

const AboutPage = () => {
  const values = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our products and services.",
    },
    {
      title: "Innovation",
      description: "We continuously strive to improve and innovate our product offerings.",
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority, and we go the extra mile to ensure it.",
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
            <Button variant="contained" sx={{ mt: 2 }}>
              Meet Our Team
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

        {/* Section: Our Values */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Values
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ mt: 2 }}
          >
            {values.map((value, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  p: 4,
                  flex: 1,
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {value.description}
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
