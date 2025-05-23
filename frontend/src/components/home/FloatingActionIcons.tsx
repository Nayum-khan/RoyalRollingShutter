// components/FloatingActionIcons.tsx
import { Box, IconButton, Tooltip } from "@mui/material"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { useEffect, useRef } from "react"

const iconStyle = {
  backgroundColor: "white",
  color: "black",
  m: 1,
  width: 50,
  height: 50,
  transition: "all 0.3s ease",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: "#ff6f00", // or use "primary.main"
    color: "#fff",
    transform: "scale(1.15)",
    borderColor: "#ff6f00",
  },
}

const FloatingActionIcons = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (iconsRef.current) {
        const viewportHeight = window.innerHeight;
        iconsRef.current.style.top = `${viewportHeight * 0.35}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "35%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      }}
    >
      <Tooltip title="Help / FAQ" placement="left">
        <IconButton sx={iconStyle} href="/contact">
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Email Us" placement="left">
        <IconButton sx={iconStyle} href="mailto:royalrollingshuttersgujrat@gmail.com">
          <EmailIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Call Us" placement="left">
        <IconButton sx={iconStyle} href="tel:+918505091532">
          <PhoneIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="WhatsApp" placement="left">
        <IconButton
          sx={iconStyle}
          href="https://wa.me/918505091532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default FloatingActionIcons
