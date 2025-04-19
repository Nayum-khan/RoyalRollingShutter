import { Box, Container, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "../../data/products";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 3);

  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: { xs: "flex-start", md: "center" }, 
          justifyContent: "space-between", 
          mb: 6 
        }}>
          <Box>
            <Typography variant="h3" component="h2" gutterBottom>
              Featured Products
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Explore our most popular rolling shutter solutions for residential and commercial applications.
            </Typography>
          </Box>
          <Button
            variant="contained"
            component={RouterLink}
            to="/products"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: { xs: 2, md: 0 } }}
          >
            View All Products
          </Button>
        </Box>

        <Box sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 4, 
          justifyContent: { xs: "center", md: "flex-start" } 
        }}>
          {featuredProducts.map((product) => (
            <Box 
              key={product.id} 
              sx={{ 
                flex: "1 1 300px", 
                maxWidth: "100%", 
                minWidth: "280px",
                cursor: 'pointer'
              }}
            >
              <Card 
                sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  '&:hover': {
                    transform: "translateY(-5px)",
                    boxShadow: 6
                  }
                }}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia 
                    component="img" 
                    height="240" 
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
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to={`/products/${product.id}`}
                    endIcon={<ArrowForwardIcon />}
                    onClick={(e) => e.stopPropagation()}
                    sx={{ fontWeight: 'bold' }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductShowcase;