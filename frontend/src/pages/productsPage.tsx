import { Box, Container } from "@mui/material"
import ProductGrid from "../components/products/productGrid"
import ProductFilters from "../components/products/productFilters"
import PageHeader from "../components/ui/pageHeader"

const ProductsPage = () => {
  return (
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <PageHeader
          title="Our Products"
          description="Explore our complete range of premium rolling shutters designed for durability, security, and style."
        />

        <Box sx={{ mt: 6, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* <Box sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0 }}> */}
            {/* <ProductFilters /> */}
          {/* </Box> */}
          <Box sx={{ flexGrow: 1 }}>
            <ProductGrid />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductsPage
