"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { products } from "../../data/products"
import ProductSidebar from "./productSidebar"

const categories = ["All", "Shutter", "Aluminium-Section", "Doors", "Railing", "Shed", "Stair"]

const ProductGrid = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileOpen, setMobileOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
      {/* AppBar for mobile */}
      {isMobile && (
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Products
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box sx={{ py: 4 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              position: "relative",
            }}
          >
            {/* Sidebar Component */}
            <ProductSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              mobileOpen={mobileOpen}
              onMobileToggle={handleDrawerToggle}
            />

            {/* Product Grid */}
            <Box
              sx={{
                flexGrow: 1,
                width: { sm: "70%" },
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {filteredProducts.map((product) => (
                <Box
                  key={product.id}
                  sx={{
                    flex: "1 1 300px",
                    maxWidth: "100%",
                    minWidth: "280px",
                    cursor: "pointer",
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="380"
                        image={product.images[0]}
                        alt={product.name}
                        sx={{ objectFit: "cover" }}
                      />
                      <Chip
                        label={product.category}
                        color="primary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          height: "3em",
                        }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        color="primary"
                        component={Link}
                        to={`/products/${product.id}`}
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: "bold" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        component={Link}
                        to="/contact"
                        sx={{ fontWeight: "bold" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Request Quote
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductGrid
