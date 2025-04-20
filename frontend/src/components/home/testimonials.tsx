import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  Divider,
  IconButton
} from "@mui/material";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FormatQuote } from "@mui/icons-material";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The rolling shutters from RollMaster have completely transformed our home. Not only do they look great, but they've also significantly reduced our energy bills. The installation team was professional and efficient.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The rolling shutters from RollMaster have completely transformed our home. Not only do they look great, but they've also significantly reduced our energy bills. The installation team was professional and efficient.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The rolling shutters from RollMaster have completely transformed our home. Not only do they look great, but they've also significantly reduced our energy bills. The installation team was professional and efficient.",
    rating: 4,
    avatar: "/images/avatar-1.jpg",
  },
  // ... other testimonials
];

const Testimonials = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Section entrance animation
    gsap.from(sectionRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Staggered card animations
    gsap.from(".testimonial-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

  }, []);

  return (
    <Box 
      ref={sectionRef}
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" ref={containerRef}>
        <Box 
          textAlign="center" 
          mb={8}
          sx={{
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeInUp 0.8s ease forwards',
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: '1px',
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: theme.palette.primary.main,
                borderRadius: '2px'
              }
            }}
          >
            What Our Customers Say
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: 800, 
              mx: "auto",
              mt: 3,
              fontSize: '1.1rem'
            }}
          >
            Don't just take our word for it. Here's what our satisfied customers have to say about our rolling shutter solutions.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              className="testimonial-card"
              sx={{
                flex: "1 1 300px",
                maxWidth: "100%",
                minWidth: "280px",
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.8s ease forwards',
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Card 
                sx={{ 
                  height: "100%",
                  borderRadius: '12px',
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6
                  },
                  position: 'relative',
                  overflow: 'visible',
                  '&:before': {
                    content: '"“"',
                    position: 'absolute',
                    top: -40,
                    left: 20,
                    fontSize: '120px',
                    color: theme.palette.primary.light,
                    opacity: 0.2,
                    fontFamily: 'serif',
                    lineHeight: 1
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        mr: 2,
                        border: `3px solid ${theme.palette.primary.main}`,
                        boxShadow: 2
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="h3"
                        fontWeight="600"
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{ 
                      mb: 3,
                      '& .MuiRating-iconFilled': {
                        color: theme.palette.primary.main
                      }
                    }} 
                  />
                  
                  <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ 
                      fontStyle: "italic",
                      position: 'relative',
                      pl: 3,
                      '&:before': {
                        content: '"“"',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        lineHeight: 1
                      }
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                  
                  <Box textAlign="right" mt={3}>
                    <IconButton
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main
                        }
                      }}
                    >
                      <FormatQuote />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;