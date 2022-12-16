import { Image, CircularProgress, GridItem, Grid, Text, Flex, Wrap, Center } from "@chakra-ui/react"
import { useEffect } from "react"
import { getProducts } from '../../Redux/ProductReducer/action'
import { useDispatch, useSelector } from "react-redux"


function ProductsGrid() {

    const productsRecord = useSelector((store) => store.ProductReducer.productsRecord) 
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

    console.log("Conponents/Products/ProductGrid: data import success => ", productsRecord)

    return (<>

{/* display below loader while data is loading  */}
{/* {productsRecord.length>=0?<Center w="full" h="75vh"> <CircularProgress isIndeterminate color='red' />  </Center> : <Text> </Text>} */}


    {/* Grid than contain all the products */}
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={1} w="full" >
            {
                // map products
                productsRecord.data?.map((el) => (

                    // grid item than contain data of single product
                    <GridItem w='100%' h="fit-content" key={el.id} p="10px" >
                        
                        {/* product image */}
                        <Image src={el.image} w="full" h={{ base: "250px", md: "350px", lg: "400px" }} />

                        {/* offer tag */}
                        <Wrap w="fit-content" m="auto" mt="10px">
                        
                            {/* offer logo */}
                            <Image src={"https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"} h="20px" w="20px" />
                            <Text as="b" fontSize='sm' > OFFER </Text>
                        </Wrap>

                        {/* product description */}
                        <Text as="b" fontSize='sm'> FLYING MACHINE </Text>
                        <Text fontSize='sm' pl="7" pr="7"> Men Grey Mid Rise Michale Slim Tapered Fit Jeans </Text>

                        {/* old price, current price, total discount */}
                        <Flex gap={"5px"} w="fit-content" m="auto">
                            <Text as="s" fontSize='sm'> Rs. 2,499 </Text>
                            <Text as="b" fontSize='sm'> Rs. 5,499 </Text>
                            <Text as="b" fontSize='sm' color="#ea0020"> (45% Off) </Text>
                        </Flex>

                        {/* more offer */}
                        <Text fontSize='sm'> 1 more offer </Text>
                    </GridItem>
                ))}
        </Grid>

    </>)
}

export default ProductsGrid