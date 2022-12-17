import { ChakraProvider, Text } from '@chakra-ui/react'
import { Flex, Stack, HStack, VStack, Box } from '@chakra-ui/react'
import Filters from '../Components/Products/Filters'
import ProductsGrid from '../Components/Products/ProductsGrid'
import Sort from '../Components/Products/Sort'
import { useEffect } from "react"
import { getProducts } from '../Redux/ProductReducer/action'
import { useDispatch, useSelector } from "react-redux"
import DataLoading from '../Components/Products/DataLoading'
import ErrorMessage from '../Components/Products/ErrorMessage'
import Paginatation from '../Components/Products/Paginatation'

function Products() {

    const isLoading = useSelector((store) => store.ProductReducer.isLoading)
    const isError = useSelector((store) => store.ProductReducer.isError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts({
            //   category:category,
            //   type:type,
            //   page: page,
            //   limit: 10,
            //   sort: sort,
            //   order: sortOrder
        }));

        // temp
        //   setSort("price")

    }, [])


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

                    {/* if products is loading */}
                    {isLoading? <DataLoading />: <Text> </Text>}
                   
                    {/* if Product get requets failed */}
                    {isError?<ErrorMessage />: <Text> </Text>}

                    {/* Display products  */}
                    <ProductsGrid />

                    {/* paginatation */}
                    <Paginatation />

                </Box>
            </Flex>

        </ChakraProvider>)
}

export default Products