import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Heading,
    Input,
    Text,
    
  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import { Flex,  HStack, Image, StackDivider, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Cart = () => {
    const token = useSelector((store) => store.auth.data.token)
    console.log(token)
    const toast = useToast()
    var disc = localStorage.getItem("discount") || 0
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Promo, setPromo] = React.useState("")
    const [arr,setArr] = React.useState([])

    const handleApply = () => {
        if (Promo === "PR500") {
            localStorage.setItem("discount", 500);
            toast({
                title: 'PROMOCODE',
                description: "Promode code applied successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        } else {
            toast({
                title: 'PROMOCODE',
                description: "Promode code applied faild",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            //alert("please enter valid Promocode")
      }
    
    };
    
    //  const arr = [
    //     {
    //         brandname: "U.S. Polo Assn. Denim Co.",
    //         productname: "METALLIC LOGO POLO SHIRT",
    //         color: "Black",
    //         size: "XL",
    //         img_url: "https://cdn14.nnnow.com/web-images/thumbnail/styles/IUB43TOYANB/1663150197304/1.jpg",
    //         mrp: " 1,799",
    //         price: "1439",
    //         discount:"(20% Off)"

    //     },
    //     {
    //         brandname: "U.S. Polo Assn. Denim Co.",
    //         productname: "METALLIC LOGO POLO SHIRT",
    //         color: "Black",
    //         size: "XL",
    //         img_url: "https://cdn14.nnnow.com/web-images/thumbnail/styles/IUB43TOYANB/1663150197304/1.jpg",
    //         mrp: " 1,799",
    //         price: "1439",
    //         discount:"(20% Off)"

    //     }
    // ]
    //var arr =[1,2,3]
    console.log(arr,"arr")
    var total = arr.reduce((a,c)=>a+Number(c.Price),0)
     console.log(total)
    const getData = (token) => {
        return axios({
            method: 'get',
            url: 'https://trendy-vibes-backend-production.up.railway.app/cart',
            headers: { 'Authorization': `Bearer ${token}` },
          })
    }
    useEffect(() => {
        getData(token).then(res => {
            setArr(res.data.data)
        }).catch(err => {
            console.log(err.message);
        })
    },[])
    console.log(arr)
    
  return (
    <div>
      <Box
        bg="#0092DF"
        w="100%"
        p={4}
        color="white"
        fontWeight={"bold"}
        textAlign={{
          sm: "center",
          md: "center",
          lg: "left",
        }}
      >
        <Box>
          MY BAG <span>{arr.length}</span>
        </Box>
          </Box>

          {/* ----------------- */}
          <Flex color='white' flexDirection={["column", "column", "row", "row", "row"]} mt={"20px"} gap={"20px"} mx={[
              "20px",
              "20px",
              "20px",
              "30px",
              "10%"
          ]}>
            <Box w='100px' width={[
                  "100%",
                  "100%",
                  "70%",
                  "70%",
                  "70%"
            ]}>
                  {
                      arr.length > 0 && arr.map((item,i) => {
                          return (
                              <Box key={i} mt="20px">
                                  <Box borderBottom="2px solid black"></Box>
                                  <Flex >
                                        <Box width={["20%","20%","20%","15%","15%"]}><Image w={"100px"} h={"125px"} src={item.img}></Image></Box>
                                        <Box width={"85%"}>
                                            <HStack textAlign={"left"} fontSize={"12px"} width={"100%"}  justifyContent={"space-between"} flexDirection={["column", "column", "column", "row", "row"]}>
                                                    <Box color={"black"} lineHeight={"25px"}>
                                                        <p>{item.brand}</p>
                                                        <Text fontWeight={"bold"}>{item.description}</Text>
                                                        <p>Color - {"black"}</p>
                                                        <p>Size - {"xxl"}</p>
                                                        <a href="#"><Text as="u">Move To Favorites</Text></a> <a href="#"><Text as="u">Remove</Text></a>
                                                    </Box>
                                                    <Box color={"black"} lineHeight={"25px"}>
                                                  <Text>Qty:
                                                      <select>
                                                          <option value="">1</option>
                                                          <option value="">2</option>
                                                          <option value="">3</option>
                                                      </select></Text>
                                                    </Box>
                                              <Box width={"50%"} color={"black"} lineHeight={"25px"}>
                                                  <HStack justify={"space-evenly"}>
                                                      <Box><span><Text mr={"5px"} as="del">Rs.{item.Price*2}</Text></span></Box>
                                                      <Box><span><Text mr={"5px"} fontWeight={"bold"} >Rs.{item.Price }</Text></span></Box>
                                                      <Box><span><Text mr={"5px"} as='b' color={"#EA0020"}>{`${"(20%off)"}`}</Text></span></Box>
                                                  </HStack>
                                                    </Box>
                                                </HStack>
                                            </Box>
                                  </Flex>
                            </Box>
                          )
                      })
                  }
            </Box>
              <Box  width={[
                  "100%",
                  "100%",
                  "30%",
                  "30%",
                  "30%"
            ]}>
                  {/* <Text>Box 2</Text> */}
                  <Box bg={"#F2F2F2"} color={"black"}>
                  <HStack spacing={["0px","0px","0px","0px",'-0px',]}  p={"10px"}>
                    <Box w='40px' h='40px' ml={"15%"}>
                    <Image  h={"25px"} src={"https://static.nnnow.com/client/assets/images/promotions/icon_promo.png"} alt={"tag pic"} />
                    </Box>
                    <Box w='70%' h='40px' fontWeight={"bold"}  pt="-100px" >
                              {/* <Test/>  */}
                              <Box position="relative" h="100vh" p={12}>
      <Button mt="-85px" ml="-50px" p="0px" onClick={onOpen}>
        APPLY PROMOCODE
      </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Apply Promocode</ModalHeader>
                <ModalCloseButton />
                        <ModalBody textAlign={"center"}>
                            <Input placeholder="Enter Promocode" value={Promo} onChange={(e)=>{setPromo(e.target.value)}}></Input>
                            <Heading fontSize={"20px"}> PROMOS : PR500</Heading>
                            <Text>You save INR 500.00</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button
                    variant="ghost"
                    onClick={() => {
                        handleApply();
                        onClose();
                        
                    }}
                    >
                    Apply{" "}
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            </Box>
                    </Box>
                    </HStack>
                  </Box>
                  <Box bg={"#F2F2F2"} color={"black"} p={"5px"} mt={"20px"}>
                  <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={2}
                          align='stretch'
                          m={"20px"}
                    >
                    <Box h='40px'>
                    <Heading as='h3' size='sm' textAlign={"left"}>OVERVIEW</Heading>         
                    </Box>
                    <Box h='20px' >
                    <HStack  p={"0"} justifyContent={"space-between"}>
                        <Box h='40px' >
                            <p>Subtotal</p>
                        </Box>
                        <Box  fontWeight={"bold"}>
                            <p>Rs.{total}</p>
                        </Box>
                    </HStack>
                    </Box>
                    <Box h='20px' >
                        <HStack  p={"0"} justifyContent={"space-between"} color={"#FF3399"}>
                            <Box h='40px' >
                                <p>DISCOUNT</p>
                            </Box>
                            <Box  fontWeight={"bold"}>
                                <p>Rs.{`${disc}`}</p>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='20px'>
                        <HStack  p={"0"} justifyContent={"space-between"}>
                            <Box h='40px' >
                                <p>GST</p>
                            </Box>
                            <Box  fontWeight={"bold"}>
                                <p>Rs.{"0"}</p>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='20px' >
                        <HStack  p={"0"} justifyContent={"space-between"}>
                            <Box h='40px' >
                                <p>Delivery Charges</p>
                            </Box>
                            <Box  fontWeight={"bold"}>
                                <p>Rs.{"0"}</p>
                            </Box>
                        </HStack>
                          </Box>
                         <Box borderBottom="2px solid black"></Box>
                    <Box h='30px' >
                              <HStack p={"0"} justifyContent={"space-between"} fontWeight={"bold"}>
                            <Box h='40px' >
                                <p>Total</p>
                            </Box>
                            <Box  fontWeight={"bold"}>
                                <p>Rs.{`${total-disc}`}</p>
                            </Box>
                    </HStack>
                    </Box>
                    </VStack>
                  </Box>
                 
                  <Box mt={"30px"}  width={"100%"} h={"50px"} bg={"#f39"} fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to="/payment"><Button bg={"#f39"} as="b" pb={"15px"}>CHECKOUT</Button></Link></Box>
                  <Box border={"2px solid green"} mt={"20px"} width={"100%"} h={"30px"}   fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to={"/#"}><Box  color={"black"}>SHOP MORE</Box></Link></Box>
                  <Image mt={"20px"} src={"https://static.nnnow.com/mybag_offer_banner.jpg"} alt={"banner"}></Image>

            </Box>
          </Flex>
          
    </div>
  );
};

export default Cart;
