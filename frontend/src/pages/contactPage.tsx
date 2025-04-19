import { Box, Container } from "@mui/material"
import ContactForm from "../components/contact/contactForm"
import ContactInfo from "../components/contact/contactInfo"
import PageHeader from "../components/ui/pageHeader"

const ContactPage = () => {
  return (
    <Box component="main" sx={{ py: 6 }}>
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
          <Box sx={{ flex: 1 }}>
            <ContactForm />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ContactInfo />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactPage
