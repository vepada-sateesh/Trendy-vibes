import { Box, ChakraProvider } from '@chakra-ui/react'
import Details from '../Components/ProductDetails/Details'
import ImageSlider from '../Components/ProductDetails/ProductImage'

function ProductDetails(){
    return(
        <ChakraProvider>
        {/* This box contain slider and product details */}
        <Box display={{ md: 'flex' }} gap="10">
          
          {/* image slider */}
          <Box w="full">
             <ImageSlider />
          </Box>

        {/* details */}
          <Box w="full">
            <Details />
            </Box>

          </Box>


      </ChakraProvider>)
}

export default ProductDetails