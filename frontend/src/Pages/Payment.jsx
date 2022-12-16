import { Box, Checkbox, Flex, Heading, HStack, Image, Input, StackDivider, Text, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { InfoIcon, CalendarIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'

const Payment = () => {

    const toast = useToast()
    var disc = localStorage.getItem("discount") || 0
    
    
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
          <Flex color='white' flexDirection={["column", "column", "row", "row", "row"]} mt={"20px"} gap={"20px"} mx={[
              "20px",
              "20px",
              "20px",
              "30px",
              "10%"
          ]}>
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
                      <Input placeholder="Enter card Number"></Input>
                      <p>Enter Name on Card</p>
                      <Input placeholder="Enter Name on Card"></Input>
                      <p>CVV</p><Input width={"100px"}></Input><InfoIcon/><br/>
                      Exp. Date <Input width={"150px"} type={"date"}></Input><br/>
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
                  <Box mt={"20px"} width={"100%"} h={"30px"} bg={"#f39"} fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to={"/#"} onClick={() =>
        toast({
          title: 'SUCCESS',
          description: "order placed successfully",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>PLACE ORDER</Link></Box>
                    {/* <Box border={"2px solid green"} mt={"20px"} width={"100%"} h={"30px"}   fontWeight={"bold"} pt={"10px"} pb={"30px"}><Link to={"/#"}><Box  color={"black"}>SHOP MORE</Box></Link></Box> */}
                  <Image mt={"20px"} src={"https://static.nnnow.com/mybag_offer_banner.jpg"} alt={"banner"}></Image>

            </Box>
          </Flex>
          
    </div>
  );
};

export default Payment;
