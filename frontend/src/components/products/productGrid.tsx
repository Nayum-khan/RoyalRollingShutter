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

const categories = [
  "All",
  "Shutter",
  "Aluminium-Section",
  "Doors",
  "Railing",
  "Shed",
  "Stair",
]

const ProductGrid = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileOpen, setMobileOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const handleCategoryChange = (cat: string) => setSelectedCategory(cat)

  return (
    <>
      {/* Mobile AppBar with Drawer toggle */}
      {isMobile && (
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Products
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box sx={{ py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {/* Sidebar: no container padding, flush to left */}
          <Box
            sx={{
              width: { xs: "100%", sm: "35%" },
              position: "sticky",
              top: 80,
              left:10,
              height: "fit-content",
              bgcolor: "transparent",
            }}
          >
            <ProductSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              mobileOpen={mobileOpen}
              onMobileToggle={handleDrawerToggle}
            />
          </Box>

          {/* Grid: only this box is padded */}
          <Box
            sx={{
              width: { xs: "100%", sm: "65%" },
              px: { xs: 2, sm: 4 },     // ← apply padding here
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(auto-fill, minmax(280px, 1fr))",
              },
              gap: 4,
            }}
          >
            {filteredProducts.map((product) => (
              <Box
                key={product.id}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/products/${product.id}`)}
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
                    "&:hover img": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease",
                    },
                  }}
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
      </Box>
    </>
  )
}

export default ProductGrid
