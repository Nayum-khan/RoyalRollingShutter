import { useState } from 'react';
import { Box, Container, Typography, Button, Stack, IconButton } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import { products } from "../data/products";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {/* Product Name and Price */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              {product.price}
            </Typography>
          </Box>

          {/* Main Image with Navigation */}
          <Box sx={{ position: 'relative', mb: 3 }}>
            <Box
              component="img"
              src={product.images[currentImageIndex]}
              alt={`${product.name} - View ${currentImageIndex + 1}`}
              sx={{
                width: '100%',
                height: '400px',
                objectFit: 'contain',
                borderRadius: 1,
                boxShadow: 1
              }}
            />
            
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.7)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
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
                bgcolor: 'rgba(255,255,255,0.7)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Thumbnail Gallery */}
          <Stack direction="row" spacing={2} sx={{ mb: 4, overflowX: 'auto', py: 1 }}>
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
                  transition: 'all 0.2s ease'
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

          {/* Product Description */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
          </Box>

          <Button
            variant="contained"
            component={RouterLink}
            to="/products"
            sx={{ mt: 2 }}
          >
            Back to Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;