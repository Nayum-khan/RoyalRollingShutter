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
    name: "Nayum Khan",
    role: "Homeowner",
    content: "Royal Rolling Shutter has exceeded my expectations. The shutters not only enhance the security of my home but also give it a premium look. The service was prompt and hassle-free!",
    rating: 5,
    avatar: "/images/nayum.jpeg",
  },
  {
    id: 2,
    name: "Salim Pathan",
    role: "Shop Owner",
    content: "Extremely happy with the quality and installation process. My shop now feels much safer, and the rolling mechanism is smooth and silent. Highly recommend Royal Rolling Shutter!",
    rating: 5,
    avatar: "/images/salim.jpeg",
  },
  {
    id: 3,
    name: "Wasim Luhar",
    role: "Business Owner",
    content: "Professional team and top-notch products! I got shutters installed at my warehouse, and they’ve been working perfectly even after months of use. Great job!",
    rating: 5,
    avatar: "/images/wasim.jpeg",
  },
  {
    id: 4,
    name: "Nadeem Khan",
    role: "Residential Customer",
    content: "From start to finish, the team at Royal Rolling Shutter was amazing. They guided me through the options, and the final result looks fantastic on my house. Totally worth it!",
    rating: 5,
    avatar: "/images/nadeem.jpeg",
  },
  {
    id: 5,
    name: "Abbas Singhania",
    role: "Supplier",
    content: "Working with Royal Rolling Shutter has been a fantastic experience. They are professional, prompt with orders, and maintain a great relationship with their partners. Proud to be associated with them.",
    rating: 5,
    avatar: "/images/punjabi.jpeg",
  },
  {
    id: 6,
    name: "Saahil Vishwakarma",
    role: "Shop Owner",
    content: "I installed Royal Rolling Shutters at my shop and I couldn’t be happier. They’re sturdy, smooth to operate, and give me peace of mind when I close up every night. Great product and excellent support!",
    rating: 5,
    avatar: "/images/saahil.jpeg",
  }
  
  
]


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
        py: 19,
        position: 'relative',
        overflow: 'hidden',
        background: `rgb(247, 255, 255)`,
        backgroundImage:"url('/images/pan-india-presence.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "left 20%", sm: "left center" }, // Adjusted for mobile
        backgroundSize: { xs: "500px", sm: "contain" }, 

        
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
              fontSize: '1.5rem'
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
        flex: { xs: "1 1 280px", sm: "1 1 300px" }, // Smaller base width on mobile
        maxWidth: "80%",
        maxHeight: "100%",
        minWidth: { xs: "280px", sm: "280px" },
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
    height: { xs: "auto", sm: "100%" }, // Auto height on mobile, full height on sm+
    minHeight: { xs: "300px", sm: "none" }, // Optional: Set minimum height on mobile
    borderRadius: '18px',
    boxShadow: 10,
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
        <CardContent sx={{ 
          p: { xs: 2, sm: 4 }, // Smaller padding on mobile
        }}>
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            mb: { xs: 2, sm: 3 } // Smaller margin on mobile
          }}>
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ 
                width: { xs: 50, sm: 60 }, // Smaller avatar on mobile
                height: { xs: 50, sm: 60 }, // Smaller avatar on mobile
                mr: 2,
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: 4
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
                      mb: 0,
                      '& .MuiRating-iconFilled': {
                        color: theme.palette.primary.main
                      }
                    }} 
                  />
                  
                  <Divider sx={{ my: 0, borderColor: theme.palette.divider }} />
                  
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
                        fontSize: '3rem',
                        color: theme.palette.primary.main,
                        lineHeight: 1
                      }
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                 
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