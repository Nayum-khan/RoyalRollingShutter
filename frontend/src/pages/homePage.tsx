import { Box } from "@mui/material";
import Hero from "../components/home/hero";
import FloatingActionIcons from "../components/home/FloatingActionIcons";
import Features from "../components/home/features";
import ProductShowcase from "../components/home/productShowcase";
import Testimonials from "../components/home/testimonials";
import CTA from "../components/home/CTA";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { StatsSection } from "../components/home/StatsSection";
import MapSection from "../components/home/MapSection";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const productShowcaseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !productShowcaseRef.current) return;

    // Explicitly type the elements as HTMLElement[]
    const sections = gsap.utils.toArray<HTMLElement>(".animate-section", containerRef.current);

    sections.forEach((section, index) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
          markers: false
        }
      });
    });

    // Product cards animation
    const productCards = gsap.utils.toArray<HTMLElement>(".product-card", productShowcaseRef.current);
    
    gsap.from(productCards, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: productShowcaseRef.current,
        start: "top 70%"
      }
    });

  }, []);

  return (

    <Box component="main" ref={containerRef}>
      <Hero />
      <Box className="animate-section">
        <Features />
      </Box>
      <Box className="animate-section" ref={productShowcaseRef}>
        <ProductShowcase />
      </Box>
      <Box className="animate-section">
        <Testimonials />
      </Box>
      <StatsSection />
      <Box className="animate-section">
        <CTA />
      </Box>
      <MapSection /> 
    </Box>
  );
};

export default HomePage;