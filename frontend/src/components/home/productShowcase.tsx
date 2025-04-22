import {
  Box,
  Container,
  Typography,
  Link,
  Card,
  CardMedia,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";  // Removed Navigation
import "swiper/css";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 15);

  return (
    <Box
      sx={{
        background: "rgb(247, 255, 255)",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            mb: 6
          }}
        >
          <Box>
            <Typography variant="h3" component="h2" gutterBottom>
              Featured Products
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600 }}
            >
              Explore our most popular rolling shutter solutions for residential
              and commercial applications.
            </Typography>
          </Box>
        </Box>

        <Swiper
          modules={[Autoplay]}  // Removed Navigation
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                onClick={() => navigate(`/products/${product.id}`)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6
                  },
                  textAlign: "center",
                  p: 0
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={product.images[0]}
                    alt={product.name}
                    sx={{ objectFit: "cover", borderRadius: 1 }}
                  />
                  <Chip
                    label={product.category}
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      fontWeight: "bold"
                    }}
                  />
                </Box>
                <Typography variant="h6" mt={2} mb={1}>
                  {product.name}
                </Typography>
                <Link
                  underline="hover"
                  sx={{
                    color: "error.main",
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontSize: "1rem"
                  }}
                >
                  Discover more →
                </Link>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ProductShowcase;