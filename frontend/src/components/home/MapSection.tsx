import { Box } from "@mui/material";

const MapSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        mt: 0, // optional spacing above the map
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.49293995529!2d73.07480227505766!3d21.915593279965034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8d2aa531e917%3A0x18cb4e1e08ea35fe!2sRoyal%20Rolling%20Shutters%20%26%20Fabrication%20Works!5e0!3m2!1sen!2sin!4v1745138219098!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Royal Rolling Shutters Map"
      ></iframe>
    </Box>
  );
};

export default MapSection;
