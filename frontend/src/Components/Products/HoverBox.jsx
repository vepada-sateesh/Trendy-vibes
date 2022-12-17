import { Image, Text, Flex, Box } from "@chakra-ui/react"
import { useState } from "react"
import { BsHeart, BsHandbag } from 'react-icons/bs';


function HoverBox({el}){
    return(<>
    
    
    <Box w="full" h={{ base: "250px", md: "350px", lg: "400px" }} bg="red">
               
                            {/* second image of product */}
                            <Image src={el.hidenimgsrc} w="full" h={{ base: "160px", md: "260px", lg: "310px" }} />
                            
                            {/* below image buttons */}

                            <Flex h="90px" w="full" bg="#ff3399" color="white" fontWeight={"bold"} justifyContent="center" gap="7" pt="6" > 
                            
                            {/* wishlist button */}
                            <Box align="center" _hover={{border:"1px", borderColor:"white"}}>
                                <BsHeart size={"30px"}  />
                            <Text fontSize='xs'>FAVOURITE</Text>
                            </Box>
                            
                            {/* ShopNow button */}
                            <Box align="center"><BsHandbag size={"30px"} color="white" />
                            <Text fontSize='xs'>SHOP NNNOW</Text>
                            
                            </Box>

                            </Flex>
                            </Box>

    </>)
}

export default HoverBox