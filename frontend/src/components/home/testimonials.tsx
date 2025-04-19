import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from "@mui/material"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The rolling shutters from RollMaster have completely transformed our home. Not only do they look great, but they've also significantly reduced our energy bills. The installation team was professional and efficient.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "As a retail store owner, security was my primary concern. The commercial shutters from RollMaster provide the peace of mind I was looking for. The quality is exceptional, and the customer service was outstanding.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Architect",
    content:
      "I've recommended RollMaster shutters to several of my clients, and the feedback has always been positive. The range of options and customization possibilities make them perfect for various architectural styles.",
    rating: 4,
    avatar: "/images/avatar-3.jpg",
  },
]

const Testimonials = () => {
  return (
    <Box className="section-padding">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            What Our Customers Say
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
            Don't just take our word for it. Here's what our satisfied customers have to say about our rolling shutter
            solutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" component="h3" fontWeight="medium">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
