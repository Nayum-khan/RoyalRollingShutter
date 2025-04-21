import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Hero = () => {
  const titleRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Royal Rolling Shutter & Fabrication";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTitle && typedText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 70); // typing speed (ms)
      return () => clearTimeout(typingTimer);
    }
  }, [showTitle, typedText, fullText]);

  const heroImages = [
    "/images/p1.png",
    "/images/InsulatedRolling1.jpg",
    "/images/InsulatedRolling3.jpg"
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        style={{ height: "89%" }}
      >
        {heroImages.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                height: "100vh",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: -10,
          left: 0,
          height: "90.5%",
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          px: 2
        }}
      >
        <Container maxWidth="md">
          {showTitle && (
            <Typography
              ref={titleRef}
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "4rem" },
                color: "white",
                mb: 3,
                minHeight: "4.5rem"
              }}
            >
              {typedText}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  bgcolor: "white",
                  ml: 0.5,
                  animation: "blink 1s infinite",
                  "@keyframes blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 }
                  }
                }}
              />
            </Typography>
          )}

          {showTitle && typedText === fullText && (
            <>
              <Typography variant="h6" sx={{ color: "grey.100", mb: 4 }}>
                Premium Rolling Shutters for Modern Homes & Businesses
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/products"
                >
                  Explore Products
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "white"
                    }
                  }}
                >
                  Get a Quote
                </Button>
              </Stack>
            </>
          )}
        </Container>
      </Box>

      {/* Scroll Down Arrow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 155,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3
        }}
      >
        <IconButton
          onClick={handleScrollDown}
          sx={{
            border: "2px solid white",
            color: "white",
            width: 60,
            height: 60,
            animation: `${bounce} 2s infinite`,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)"
            }
          }}
        >
          <ExpandMoreIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
