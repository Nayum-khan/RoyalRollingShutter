import { Box } from "@mui/material"
import Hero from "../components/home/hero"
import Features from "../components/home/features"
import ProductShowcase from "../components/home/productShowcase"
import Testimonials from "../components/home/testimonials"
import CTA from "../components/home/CTA"

const HomePage = () => {
  return (
    <Box component="main">
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <CTA />
    </Box>
  )
}

export default HomePage
