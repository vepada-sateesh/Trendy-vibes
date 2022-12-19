import { Image, Text, Flex, Box } from "@chakra-ui/react"
import { useState } from "react"
import { BsHeart, BsHandbag } from 'react-icons/bs';
import axios from "axios";

import { useSelector } from "react-redux";


function HoverBox({ el }) {
    const token = useSelector((store) => store.auth.data.token)
    console.log(token)
    const handleAddCart = () => {
        console.log(el)

                const obj = {
                        
            productName: el.description,
            img: el.frontimgsrc,
            category: el.identifier,
            description:el.description,
            brand: el.brand,
            type: el.identifier,
            Price: el.price,
            quantity:1,
        }
        axios({
            method: 'post',
            url: 'https://trendy-vibes-backend-production.up.railway.app/cart/add',
            data: obj,
            headers: { 'Authorization': `Bearer ${token}` },
          }).then(res => {
                console.log(res,"sent");
            }).catch(err => {
              console.log(err.message)
            })
        }
        

    
    return(<>
    
    
    <Box w="full" h="400px" bg="#ff3399">
               
                            {/* second image of product */}
                            <Image src={el.hidenimgsrc} alt="image removed " w="full" h="310px" />
                            
                            {/* below image buttons */}

                            <Flex h="90px" w="full" bg="#ff3399" color="white" fontWeight={"bold"} justifyContent="center" gap="7" pt="6" > 
                            
                            {/* wishlist button */}
                            <Box align="center" _hover={{border:"1px", borderColor:"white"}}>
                                <BsHeart size={"30px"}  />
                            <Text fontSize='xs'>FAVOURITE</Text>
                            </Box>
                            
                            {/* ShopNow button */}
                            <Box onClick={handleAddCart} align="center"><BsHandbag size={"30px"} color="white" />
                            <Text fontSize='xs'>SHOP NNNOW</Text>
                            
                            </Box>

                            </Flex>
                            </Box>

    </>)
}

export default HoverBox