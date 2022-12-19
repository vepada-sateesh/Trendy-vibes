import { Box, Checkbox, Flex, Heading, HStack, Image, Input, InputRightElement, StackDivider, Text, VStack } from "@chakra-ui/react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { InfoIcon, CalendarIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'
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
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

const Payment = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [pincode, setPincode] = useState("")
  const [altPhone, setAltPhone] = useState("")
  const [landMark, setLandMark] = useState("")
  const [finalAddress, setFinalAddress] = useState(null)
  const navigate = useNavigate()
  
  const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    var disc = localStorage.getItem("discount") || 0
  const handleAddress = () => {
    let addressArray =[]
    let obj = {
      "name": name,
      "address": address,
      "phone": phone,
      "alternate_phone":altPhone,
      "pincode": pincode,
      "landMark":landMark
    }
    addressArray.push(obj)
    setFinalAddress(addressArray)
      
  }
  console.log(finalAddress)
    
     const arr = [
        {
            brandname: "U.S. Polo Assn. Denim Co.",
            productname: "METALLIC LOGO POLO SHIRT",
            color: "Black",
            size: "XL",
            img_url: "https://cdn14.nnnow.com/web-images/thumbnail/styles/IUB43TOYANB/1663150197304/1.jpg",
            mrp: " 1,799",
            price: "1439",
            discount:"(20% Off)"

        },
        {
            brandname: "U.S. Polo Assn. Denim Co.",
            productname: "METALLIC LOGO POLO SHIRT",
            color: "Black",
            size: "XL",
            img_url: "https://cdn14.nnnow.com/web-images/thumbnail/styles/IUB43TOYANB/1663150197304/1.jpg",
            mrp: " 1,799",
            price: "1439",
            discount:"(20% Off)"

        }
    ]
    //var arr =[1,2,3]
    var total = arr.reduce((a,c)=>a+Number(c.price),0)
    console.log(total)
    
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
          CHECKOUT
        </Box>
          </Box>

      {/* ----------------- */}
      <Box textAlign={"center"} m="5px">
      <Button bg="#FF3399" color={"white"} as="b" onClick={onOpen}>{
            finalAddress?"CHANGE YOUR ADDRESS":"ADD YOUR ADDRESS DETAILS"
      }</Button>
      </Box>
      <Box  as="b"  >
        {
          finalAddress && finalAddress.map(items => {
            return (
              <Box textAlign={"left"} width={"90%"} m={["auto","auto","auto"]}>
                <Heading color="#FF3399">ADDRESS</Heading>
                <Text>{`Name : ${items.name}`}</Text>
                <Text>{`phone : ${items.phone}`}</Text>
                <Text>{`Alternate : ${items.alternate_phone}`}</Text>
                <Text>{`Address : ${items.address}`}</Text>
                <Text>{`Landmark : ${items.landMark}`}</Text>
                <Text>{`Pincode : ${items.pincode}`}</Text>
              </Box>
            )
          })
        }
      </Box>
          <Flex color='white' flexDirection={["column", "column", "row", "row", "row"]} mt={"20px"} gap={"20px"} mx={[
              "20px",
              "20px",
              "20px",
              "30px",
              "10%"
      ]}>
        <Box color={"black"}>
          
            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay />
            <ModalContent >
              <ModalHeader>ADDRESS</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Name*</Text>
                <Input bg="#F3F3F3" value={name} onChange={(e)=>{setName(e.target.value)}}></Input>
                <Text>Address*</Text>
                <Input bg="#F3F3F3" value={address} onChange={(e)=>{setAddress(e.target.value)}}></Input>
                <Flex  flexDirection={["column","column","column","row","row"]}>
                  <Box width={["100%","100%","100%","50%","50%"]} p="15px"><VStack
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                >
                  <Box >
                  <Text>Phone Number*</Text>
                  <Input bg="#F3F3F3" value={phone} onChange={(e)=>{setPhone(e.target.value)}}></Input>
                  </Box>
                  <Box >
                  <Text>Pincode*</Text>
                  <Input bg="#F3F3F3" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}></Input>
                  </Box>
                </VStack></Box>
                  <Box width={["100%","100%","100%","50%","50%"]} p="15px"> 
                  <VStack
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                >
                  <Box>
                  <Text>Alternate Number*</Text>
                  <Input bg="#F3F3F3" value={altPhone} onChange={(e)=>{setAltPhone(e.target.value)}}></Input>
                  </Box>
                  <Box>
                  <Text >LandMark*</Text>
                  <Input bg="#F3F3F3" value={landMark} onChange={(e)=>{setLandMark(e.target.value)}}></Input>
                  </Box>
                </VStack>
                  </Box>
              </Flex>
                
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={() => {
                  handleAddress()
                  onClose()
                }} bg={"#FF3399"} variant="ghost">Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
            <Box color={"black"} border={"3px solid grey"} w='100px' width={[
                  "100%",
                  "100%",
                  "70%",
                  "70%",
                  "70%"
        ]}>
          
                  <Text as="b">TOTAL PAYABLE AMOUNT :- { `Rs.${total}`}</Text>
                  <Box mt="20px" textAlign={"left"} lineHeight="30px" pl="20px">
                      <CalendarIcon/> <Text as ="b" >PAYMENT METHODS</Text><br/>
                      <Text as="b" >Credit / Debit Card</Text>
                      <p>Enter your card number (Visa, Mastercard, Amex)</p>
                      <Input bg="#F3F3F3" placeholder="Enter card Number"></Input>
                      <p>Enter Name on Card</p>
                      <Input bg="#F3F3F3" placeholder="Enter Name on Card"></Input>
            <Flex  flexDirection={["column","column","column","row","row"]}>
                  <Box width={["100%","100%","100%","50%","50%"]} p="15px"><VStack
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                >
                  <Box >
                  <Text>CVV*</Text>
                  <Input bg="#F3F3F3" width={"100px"}></Input>
                  </Box>
                </VStack></Box>
                  <Box width={["100%","100%","100%","50%","50%"]} p="15px"> 
                  <VStack
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                >
                  <Box>
                  <Text>Exp. Date *</Text>
                  <Input bg="#F3F3F3" type={"date"}></Input>
                  </Box>
                </VStack>
                  </Box>
              </Flex>
                      <Checkbox defaultChecked>Save card as per RBI guideline</Checkbox>
                  </Box>
            </Box>
              <Box  width={[
                  "100%",
                  "100%",
                  "30%",
                  "30%",
                  "30%"
            ]}>
                  {/* <Text>Box 2</Text> */}
                  
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
                  {/* <Button width={"100%"}>CHECKOUT</Button> */}
          <Box mt={"20px"} width={"100%"} h={"30px"} bg={"#f39"} fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to={"/#"}
            onClick={() =>
            {
              finalAddress? toast({
                title: 'SUCCESS',
                description: "order placed successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
              }):toast({
                title: 'ERROR',
                description: "Please Enter valid address details",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              navigate("/")
        }
      }>PLACE ORDER</Link></Box>
                    {/* <Box border={"2px solid green"} mt={"20px"} width={"100%"} h={"30px"}   fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to={"/#"}><Box  color={"black"}>SHOP MORE</Box></Link></Box> */}
                  <Image mt={"20px"} src={"https://static.nnnow.com/mybag_offer_banner.jpg"} alt={"banner"}></Image>

            </Box>
          </Flex>
          
    </div>
  );
};

export default Payment;
