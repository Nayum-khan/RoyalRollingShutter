import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import HomePage from "./pages/homePage"
import ProductsPage from "./pages/productsPage"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"
import ScrollToTop from "./utils/scrollToTop"
import ProductDetailPage from "./pages/ProductDetail"
import { useEffect } from "react"
import FloatingActionIcons from "./components/home/FloatingActionIcons"


// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  },
})

function App() {
  
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <FloatingActionIcons/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
