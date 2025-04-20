import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  { value: "10+", label: "Years of Excellence", icon: "🏆" },
  { value: "15+", label: "Cities with PAN India Presence", icon: "🏙️" },
  { value: "100+", label: "Satisfied Clients Across Country", icon: "🤝" },
  { value: "100+", label: "Fabrication Items", icon: "📊" },
  { value: "24/7", label: "Support", icon: "🛎️" },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontWeight: 700,
          color: "primary.main",
          mb: 1,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        {value}
      </Typography>
    </motion.div>
  );
};

const StatsItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const theme = useTheme();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box
      ref={ref}
      sx={{
        flex: 1,
        minWidth: { xs: "100%", sm: "200px" },
        maxWidth: { xs: "100%", md: "220px" },
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.5 },
          },
          hidden: { opacity: 0, y: 30 },
        }}
        whileHover={{ scale: 1.05 }}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: theme.spacing(4),
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" sx={{ mb: 1, fontSize: "2.5rem" }}>
          {stat.icon}
        </Typography>
        <AnimatedCounter value={stat.value} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {stat.label}
        </Typography>
      </motion.div>
    </Box>
  );
};

export const StatsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        background: "rgb(247, 255, 255)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
        >
          {stats.map((stat, index) => (
            <StatsItem key={stat.label} stat={stat} index={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};