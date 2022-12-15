import {Image, Box, GridItem, Grid, Text, Flex, Wrap  } from "@chakra-ui/react"

const tempArray = ["https://cdn02.nnnow.com/web-images/medium/styles/A6QOSP5GK0D/1610548514352/1.jpg"
, "https://cdn09.nnnow.com/web-images/medium/styles/C2OX49JCL7O/1653988563737/1.jpg"
,"https://cdn03.nnnow.com/web-images/medium/styles/OVZJBWU3EZ4/1650021672712/1.jpg"
, "https://cdn06.nnnow.com/web-images/medium/styles/KO165VOJLTU/1646818883779/1.jpg"
, "https://cdn09.nnnow.com/web-images/medium/styles/C2OX49JCL7O/1653988563737/1.jpg"
,"https://cdn03.nnnow.com/web-images/medium/styles/OVZJBWU3EZ4/1650021672712/1.jpg"
, "https://cdn06.nnnow.com/web-images/medium/styles/KO165VOJLTU/1646818883779/1.jpg"]

function ProductsGrid() {
    return (<>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={1} w="full" >
        {
            tempArray.map((el)=>(
                <GridItem w='100%' h="fit-content" key={el.id} p="10px" >
                    {/* product image */}
                   <Image src={el} w="full" h={{base:"250px", md:"350px", lg:"400px"}} />

                   {/* offer tag */}
                    <Wrap w="fit-content" m="auto" mt="10px">
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