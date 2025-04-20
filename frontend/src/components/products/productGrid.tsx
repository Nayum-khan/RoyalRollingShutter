import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Box, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "../../data/products";

const ProductGrid = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 4, 
          justifyContent: { xs: "center", md: "flex-start" } 
        }}>
          {products.map((product) => (
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
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  {/* <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    {product.price}
                  </Typography> */}
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/products/${product.id}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 'bold' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    to="/contact"
                    sx={{ fontWeight: 'bold' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Request Quote
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

export default ProductGrid;