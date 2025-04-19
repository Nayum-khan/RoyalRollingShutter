"use client"

import { useState } from "react"
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Slider, Button, Paper } from "@mui/material"

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState<number[]>([500, 2000])

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[])
  }

  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        {["Residential", "Commercial", "Industrial"].map((category) => (
          <FormControlLabel key={category} control={<Checkbox />} label={category} />
        ))}
      </FormGroup>

      <Typography variant="h6" gutterBottom>
        Materials
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        {["Aluminum", "Steel", "Stainless Steel", "Insulated"].map((material) => (
          <FormControlLabel key={material} control={<Checkbox />} label={material} />
        ))}
      </FormGroup>

      <Typography variant="h6" gutterBottom>
        Price Range
      </Typography>
      <Box sx={{ px: 1, mb: 3 }}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={3000}
          step={100}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">${priceRange[0]}</Typography>
          <Typography variant="body2">${priceRange[1]}</Typography>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        {["Motorized", "Remote Control", "Smart Home Compatible", "Fire Rated", "Weather Resistant"].map((feature) => (
          <FormControlLabel key={feature} control={<Checkbox />} label={feature} />
        ))}
      </FormGroup>

      <Button variant="contained" fullWidth>
        Apply Filters
      </Button>
    </Paper>
  )
}

export default ProductFilters
