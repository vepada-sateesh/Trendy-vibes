import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Stack, HStack, VStack, Box } from '@chakra-ui/react'
import Filters from '../Components/Products/Filters'
import ProductsGrid from '../Components/Products/ProductsGrid'
import Sort from '../Components/Products/Sort'

function Products() {
    return (
        // chakra provider
        <ChakraProvider>

            <Flex w="full" pl="5%" pt="10" gap={"2"}>

                {/* filter component */}
                <Box w={{ base: '35%', md: '16%', lg: '16%' }} >
                    <Filters />
                </Box>

                {/* product grid & sorting components */}
                <Box w={{ base: '60%', md: '79%', lg: '79%' }} pt="5">
                    {/* sorting component */}
                    <Sort />

                    {/* Product grid */}
                    <ProductsGrid />

                </Box>
            </Flex>

        </ChakraProvider>)
}

export default Products