import { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      gsap.from(buttonsRef.current, {
        y: 30,
        opacity: 0,
        delay: 0.6,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
        },
      });

      // Optional: subtle parallax on background
      gsap.to(heroRef.current, {
        backgroundPositionY: "20%",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={heroRef}
      className="hero-section"
      sx={{
        backgroundImage: "url(/images/1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: { xs: 8, md: 12, lg: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="md">
          <Typography
            ref={titleRef}
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              lineHeight: 1.2,
            }}
          >
            Premium Rolling Shutters for Modern Homes
          </Typography>
          <Typography
            ref={textRef}
            variant="h6"
            paragraph
            sx={{
              mb: 4,
              color: "grey.100",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Enhance security, privacy, and energy efficiency with our premium rolling shutter solutions. Custom-designed
            for your specific needs.
          </Typography>
          <Stack ref={buttonsRef} direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained" color="primary" size="large" component={RouterLink} to="/products">
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
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Get a Quote
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
