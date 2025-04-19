"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import { sendContactEmail } from "../../services/email-service"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required").min(10, "Please enter a valid phone number"),
  inquiryType: Yup.string().required("Please select an inquiry type"),
  message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
})

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "quote",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
      try {
        await sendContactEmail(values)
        setSnackbar({
          open: true,
          message: "Thank you for your inquiry. We'll get back to you shortly.",
          severity: "success",
        })
        formik.resetForm()
      } catch (error) {
        setSnackbar({
          open: true,
          message: "There was a problem sending your message. Please try again.",
          severity: "error",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Paper elevation={1} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Send Us a Message
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Full Name"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            margin="normal"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Box>

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Inquiry Type</FormLabel>
          <RadioGroup name="inquiryType" value={formik.values.inquiryType} onChange={formik.handleChange}>
            <FormControlLabel value="quote" control={<Radio />} label="Request a Quote" />
            <FormControlLabel value="information" control={<Radio />} label="Product Information" />
            <FormControlLabel value="support" control={<Radio />} label="Technical Support" />
          </RadioGroup>
        </FormControl>

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          margin="normal"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <Button type="submit" variant="contained" fullWidth size="large" disabled={isSubmitting} sx={{ mt: 3 }}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Box>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default ContactForm
