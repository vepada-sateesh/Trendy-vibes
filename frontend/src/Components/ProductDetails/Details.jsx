import { Box, Button, Center, Flex, Image, Input, Link, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { BsHeart, BsShareFill } from 'react-icons/bs';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Details() {

    const navigate = useNavigate();

   function handelAddToBag(){
      navigate('/Products');
   }

    return (
        <>

            <Box p="5" textAlign={"left"} w={{base:"full", md:"400px", lg:"400px"}}>
                {/* offer tag */}
                <Flex w="fit-content" mt="10px" >
                    {/* offer logo */}
                    <Image src={"https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"} h="20px" w="20px" />
                    <Text as="b" fontSize='sm' > OFFER </Text>
                </Flex>

                {/* brand name */}
                <Text as="b" fontSize='md' > FLYING MACHINE </Text>

                {/* description */}
                <Text fontSize='md' > Men Dark Blue Michael Slim Tapered Fit Whiskered Jeans </Text>

                {/* old price, current price, total discount */}
                <Flex gap={"5px"} w="fit-content" >
                    <Text as="s" fontSize='sm'> Rs. 2,499 </Text>
                    <Text as="b" fontSize='sm'> Rs. 5,499 </Text>
                    <Text as="b" fontSize='sm' color="#ea0020"> (45% Off) </Text>

                    <Text fontSize='sm' color="grey"> T&C </Text>
                </Flex>

                {/* offers */}
                <Flex gap={"5px"} w="fit-content" mt="10" >
                    <Text as="b" fontSize='sm'> OFFER: </Text>
                    <Text fontSize={"sm"}>Buy Footwear at Additional 10% Off</Text>
                </Flex>


                <Box border={"2px"} borderColor="gray" borderStyle={"dashed"} w="fit-content" fontSize={"xs"} pl="2" pr="2" ml="50px">  FW10 </Box>
                {/* other product in this offer */}
                <Text fontSize={"xs"} ml="50px" color="#ff3399">OTHER ELIGIBLE PRODUCTS</Text>

                {/* size */}
                <Flex mt="5">
                    <Text as="b" fontSize={"sm"}>SIZE</Text>
                    <Spacer />
                    <Text fontSize={"xs"} ml="10" mb="3" color="#ff3399">SIZE CHART </Text>
                </Flex>
                {/* available size button */}
                <Flex>
                    <Button bg="transparent" border={"2px"} borderColor="grey" borderRadius="none" size='sm' _hover={{ borderColor: "black" }} >1</Button>
                </Flex>

                {/* available color */}
                <Flex gap="2" mt="5">
                    <Text fontSize={"sm"} as="b"> Color: </Text>
                    <Text fontSize={"sm"} > Dark Blue </Text>
                </Flex>
                <Box mt="2" border={"2px"} borderColor="blue" p="1"  h="fit-content" w="fit-content">
                <Box bg="blue"  h="6" w="6"></Box>
                </Box>

                {/* add to bag */}
                <Wrap mt={7}>
                <Button  w="full" bg="#ff3399" color={"white"} borderRadius="none" h="50px" _hover={{}}  onClick={()=>{ handelAddToBag() }} > Add to Bag </Button>
                </Wrap>

                {/* wishlist & share button */}
                <Flex mt="5" w="full" justifyContent={"center"} gap="3">

                    {/* wishlist button */}
                    <Box >
                        <Center border={"2px"} borderColor="#ff3399" borderRadius={"100"} p="3" >
                        <BsHeart color="#ff3399" size="25px"  />
                        </Center>
                        <Text align={"center"} fontSize="xs" as="b">FAVORITE</Text>
                    </Box>

                    {/* share item button */}

                    <Box >
                        <Center border={"2px"} borderColor="#2ba2e4" borderRadius={"100"} p="3" >
                        <BsShareFill color="#2ba2e4" size="25px"  />
                        </Center>
                        <Text align={"center"} fontSize="xs" as="b" pl="10px">  SHARE</Text>
                    </Box>

                </Flex>

                {/* promotion image */}
                <Image mt="5" w="full" src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" />

                {/* delivery options */}
                <Box mt="5">
                    <Text as="b" fontSize={"sm"} >DELIVERY/STORE OPTIONS :</Text>
                    <Text fontSize={"sm"}>Enter your pincode to view delivery & store options</Text>
                </Box>

                <Flex mb="10">
                    <Input type={"number"} bg="gray.100" />
                    <Button color="black" border={"2px"} bg="transparent" borderRadius={"none"}>CHECK</Button>
                </Flex>

            </Box>
        </>
    )
}

export default Details