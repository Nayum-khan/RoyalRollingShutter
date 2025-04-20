import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  IconButton,
  Paper,
  Chip,
  Divider
} from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import { products } from "../data/products";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || ''));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 4 }}>Product not found</Typography>
      </Container>
    );
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box component="main" sx={{ 
      py: 6,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ 
          p: { xs: 2, md: 4 },
          borderRadius: 2,
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
          // '&:before': {
          //   content: '""',
          //   position: 'absolute',
          //   top: 0,
          //   right: 0,
          //   width: '40%',
          //   height: '100%',
          //   background: 'linear-gradient(45deg, rgba(26,35,126,0.05) 0%, rgba(26,35,126,0.01) 100%)',
          //   zIndex: 0
          // }
        }}>
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/products"
            sx={{ 
              mb: 3,
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            Back to Products
          </Button>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            position: 'relative',
            zIndex: 1
          }}>
            {/* Image Gallery Section */}
            <Box sx={{ 
              flex: 1,
              minWidth: { md: '50%' }
            }}>
              {/* Main Image with Navigation */}
              <Box sx={{ 
                position: 'relative', 
                mb: 3,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                backgroundColor: '#f9f9f9'
              }}>
                <Box
                  component="img"
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - View ${currentImageIndex + 1}`}
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '400px' },
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': { bgcolor: 'white' },
                    boxShadow: 2
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': { bgcolor: 'white' },
                    boxShadow: 2
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>

              {/* Thumbnail Gallery */}
              <Stack direction="row" spacing={2} sx={{ 
                mb: 4, 
                overflowX: 'auto', 
                py: 1,
                px: 1,
                mx: -1,
                '&::-webkit-scrollbar': {
                  height: '6px'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: '3px'
                }
              }}>
                {product.images.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    sx={{
                      flexShrink: 0,
                      cursor: 'pointer',
                      border: currentImageIndex === index ? 2 : 1,
                      borderColor: currentImageIndex === index ? 'primary.main' : 'divider',
                      borderRadius: 1,
                      p: 0.5,
                      transition: 'all 0.2s ease',
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 1
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 0.5
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Product Info Section */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Typography variant="h3" component="h1" sx={{ 
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}>
                {product.name}
              </Typography>

              {product.category && (
                <Chip 
                  label={product.category} 
                  color="secondary" 
                  size="small" 
                  sx={{ 
                    mb: 2,
                    alignSelf: 'flex-start'
                  }} 
                />
              )}

              {/* <Typography variant="h4" color="primary" sx={{ 
                fontWeight: 700,
                mb: 3
              }}>
                {product.price}
              </Typography> */}

              <Divider sx={{ my: 2 }} />

              <Typography variant="body1" paragraph sx={{ 
                mb: 3,
                lineHeight: 1.8,
                color: 'text.secondary'
              }}>
                {product.description}
              </Typography>

              <Box sx={{ mt: 'auto', pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  component={RouterLink}
                  to="/contact"
                  sx={{ 
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(26,35,126,0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(26,35,126,0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Request Quote
                </Button>

               
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;