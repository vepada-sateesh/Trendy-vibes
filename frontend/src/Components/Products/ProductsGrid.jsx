import { Image,  GridItem, Grid, Text, Flex, Wrap, Center, Box, Hide } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector } from "react-redux"
import HoverBox from "../Products/HoverBox"



function ProductsGrid() {

    const productsRecord = useSelector((store) => store.ProductReducer.productsRecord)
    console.log("Conponents/Products/ProductGrid: data import success => ", productsRecord)

    return (<>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={"25px"} w="full" >
            {
                // map products
                productsRecord.data?.map((el) => (

                    // grid item than contain data of single product
                    <GridItem w='100%' h="fit-content" key={el.id} >

                        {/* product image, add to wishlist or cart */}
                        <Box w="full" h="400px" overflow={"hidden"} cursor={"pointer"} >
                            
                            {/* product image */}
                            <Box _hover={{ h: "0px", w: "0px" }}
                                w="full" h="400px" >
                                <Image src={el.frontimgsrc} w="full" h="full"
                                
                                />
                            </Box>
                            
                            {/* this component show on image hover */}
                            {/* contain add to wishlist or cart button & second img of product */}
                            <HoverBox el={el} />

                        </Box>




                        {/* offer tag */}
                        <Wrap w="fit-content" m="auto" mt="10px">

                            {/* offer logo */}
                            <Image src={"https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"} h="20px" w="20px" />
                            <Text as="b" fontSize='sm' > OFFER </Text>
                        </Wrap>

                        {/* product description */}
                        <Text as="b" fontSize='sm'> {el.brand} </Text>
                        <Text fontSize='sm' pl="7" pr="7"> {el.description} </Text>

                        {/* old price, current price, total discount */}
                        <Flex gap={"5px"} w="fit-content" m="auto">
                            <Text as="s" fontSize='sm'> Rs. {el.cutoffPrice} </Text>
                            <Text as="b" fontSize='sm'> Rs. {el.price} </Text>
                            <Text as="b" fontSize='sm' color="#ea0020"> ({el.discount}% Off) </Text>
                        </Flex>

                        {/* more offer */}
                        <Text fontSize='sm'> 1 more offer </Text>
                    </GridItem>
                ))}
        </Grid>

    </>)
}

export default ProductsGrid