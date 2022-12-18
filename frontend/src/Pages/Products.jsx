import { ChakraProvider, Hide, Show, Text } from '@chakra-ui/react'
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
import { useState } from 'react'
import SmallScreenFilters from '../Components/Products/SmallScreenFilters'

function Products() {

    const isLoading = useSelector((store) => store.ProductReducer.isLoading)
    const isError = useSelector((store) => store.ProductReducer.isError)
    const dispatch = useDispatch()

    const [limit, setLimit] = useState(10)
    const [sort, setSort] = useState("")
    const [discount, setDiscount] = useState(0)
    const [brand, setBrand] = useState("")
    const [min, setMin] = useState()
    const [max, setMax] = useState()

    useEffect(() => {
        dispatch(getProducts({
              brand:brand,
              discount:discount,
              limit: limit,
              sort: sort,
              min:min,
              max:max
        }));

    }, [limit, sort, discount, brand, min, max])


    console.log("limit ", brand)

    return (
        // chakra provider
        <ChakraProvider>

            <Flex w="full" pl="5%" pt="10" gap={"2"}>

                {/* filter component */}
                <Show above="lg">  
                <Box w="16%" >
                    <Filters setDiscount={setDiscount} setBrand={setBrand} setMin={setMin} setMax={setMax} min={min} max={max} />
                </Box>
                </Show>


                {/* product grid & sorting components */}
                <Box w={{ base: '95%', md: '95%', lg: '79%' }} pt="5">

                    {/* show this component only in mobile screen */}
                    {/* this is filters component */}
                    <Show below='lg'>
                    <SmallScreenFilters setDiscount={setDiscount} setBrand={setBrand} setMin={setMin} setMax={setMax} min={min} max={max} />
                    </Show>

                    {/* sorting component */}
                    <Sort setSort={setSort}  />

                    {/* if products is loading */}
                    {isLoading? <DataLoading />: <Text> </Text>}
                   
                    {/* if Product get requets failed */}
                    {isError?<ErrorMessage />: <Text> </Text>}

                    {/* display products and pagination when data load success */}
                        {/* display products */}
                    <ProductsGrid />  
                    {/* paginatation */}
                     <Paginatation limit={limit} setLimit={setLimit} />
                
                </Box>
            </Flex>

        </ChakraProvider>)
}

export default Products