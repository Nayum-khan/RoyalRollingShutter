"use client"
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material"

interface ProductSidebarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  mobileOpen: boolean
  onMobileToggle: () => void
}

const ProductSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  mobileOpen,
  onMobileToggle,
}: ProductSidebarProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category)
    if (isMobile) {
      onMobileToggle() // Close drawer on mobile
    }
  }

  const sidebarContent = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        Categories
      </Typography>
      <List component="nav" disablePadding>
        {categories.map((category) => (
          <ListItem key={category} disablePadding>
            <ListItemButton
              selected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
              sx={{
                borderRadius: 1,
                my: 0.5,
                color: selectedCategory === category ? "primary.main" : "text.primary",
                bgcolor: selectedCategory === category ? "primary.light" : "transparent",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemText
                primary={category}
                primaryTypographyProps={{
                  fontWeight: selectedCategory === category ? "bold" : "medium",
                  fontSize: "1rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  // For mobile: render a drawer
  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onMobileToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "70%",
            boxSizing: "border-box",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    )
  }

  // For desktop: render a sticky sidebar
  return (
    <Box
      sx={{
        width: "30%",
        position: "sticky",
        top: 20,
        height: "fit-content",
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 2,
        boxShadow: 1,
        border: "1px solid #e0e0e0",
      }}
    >
      {sidebarContent}
    </Box>
  )
}

export default ProductSidebar
