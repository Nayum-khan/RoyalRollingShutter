import { Box, Typography } from "@mui/material"

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      )}
    </Box>
  )
}

export default PageHeader
