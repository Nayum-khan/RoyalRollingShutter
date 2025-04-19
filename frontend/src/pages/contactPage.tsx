import { Box, Container } from "@mui/material"
import Grid,{GridProps} from "@mui/material/Grid"
import ContactForm from "../components/contact/contactForm"
import ContactInfo from "../components/contact/contactInfo"
import PageHeader from "../components/ui/pageHeader"

const ContactPage = () => {
  return (
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <PageHeader title="Contact Us" description="Have questions or need a quote? Our team is here to help." />

        <Grid container spacing={6} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactPage
