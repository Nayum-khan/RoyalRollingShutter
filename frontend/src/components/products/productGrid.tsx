import { Link as RouterLink } from "react-router-dom"
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Box } from "@mui/material"

const products = [
  {
    id: 1,
    name: "Aluminum Security Shutters",
    description: "Lightweight yet durable aluminum shutters perfect for residential applications.",
    image: "/images/product-1.jpg",
    category: "Residential",
    price: "$899",
  },
  {
    id: 2,
    name: "Steel Commercial Shutters",
    description: "Heavy-duty steel shutters designed for maximum security in commercial settings.",
    image: "/images/product-2.jpg",
    category: "Commercial",
    price: "$1,299",
  },
  {
    id: 3,
    name: "Insulated Rolling Shutters",
    description: "Energy-efficient shutters that provide excellent thermal and acoustic insulation.",
    image: "/images/product-3.jpg",
    category: "Residential",
    price: "$1,099",
  },
  {
    id: 4,
    name: "Fire-Rated Shutters",
    description: "Specialized shutters designed to prevent the spread of fire in commercial buildings.",
    image: "/images/product-4.jpg",
    category: "Commercial",
    price: "$1,499",
  },
  {
    id: 5,
    name: "Perforated Rolling Shutters",
    description: "Ventilated shutters that allow air flow while maintaining security.",
    image: "/images/product-5.jpg",
    category: "Commercial",
    price: "$1,199",
  },
  {
    id: 6,
    name: "Motorized Residential Shutters",
    description: "Convenient remote-controlled shutters for easy operation.",
    image: "/images/product-6.jpg",
    category: "Residential",
    price: "$1,299",
  },
]

const ProductGrid = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
      {products.map((product) => (
        <Box key={product.id} sx={{ width: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 24px)", p: 1 }}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <Chip
                label={product.category}
                color="primary"
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                <Typography variant="h6" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                  {product.price}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button variant="contained" size="small" component={RouterLink} to={`/products/${product.id}`}>
                View Details
              </Button>
              <Button variant="outlined" size="small" component={RouterLink} to="/contact">
                Request Quote
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default ProductGrid
