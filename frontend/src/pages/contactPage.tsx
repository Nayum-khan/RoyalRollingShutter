import { Box, Container, Paper } from "@mui/material"
import ContactForm from "../components/contact/contactForm"
import ContactInfo from "../components/contact/contactInfo"
import PageHeader from "../components/ui/pageHeader"

const ContactPage = () => {
  return (
    <Box
      component="main"
      sx={{
        py: 6,
        background: "linear-gradient(135deg, #e0f7fa 0%, #e1f5fe 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <PageHeader
          title="Contact Us"
          description="Have questions or need a quote? Our team is here to help."
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 4,
          }}
        >
          <Paper
            elevation={6}
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <ContactForm />
          </Paper>

          <Paper
            elevation={6}
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <ContactInfo />
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactPage
