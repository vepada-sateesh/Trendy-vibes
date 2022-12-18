import { Accordion, AccordionPanel, AccordionButton, AccordionItem, AccordionIcon, Box, Heading, Checkbox, Divider, Wrap, Input, Text, Select, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Filters({setDiscount, setBrand, brand, setMin, setMax, min, max}) {
    return (<>

        {/*  Category  */}
        <Wrap w="full" direction={"column"}>
            <Heading as='h5' size='sm' align={'left'} >
                CATEGORY
            </Heading>

            {/* catogory checkboxes */}
            <Checkbox pl="7%" colorScheme='red'  onChange={()=>setDiscount(0)}> New Arrivals</Checkbox>
            <Checkbox pl="7%" colorScheme='red'  onChange={()=>setDiscount(50)}> On Sale</Checkbox>
            <Divider />
        </Wrap>
        {/* Category over here */}


        {/* filters */}
        <Wrap w="full" direction={"column"} mt="5">
            <Heading as='h5' size='sm' align={'left'}>
                FILTER BY
            </Heading>

            {/* filters options */}
            <Accordion w="full">

            <AccordionItem  m="2">
                        <h2>
                            <AccordionButton border={"2px"} borderColor="black" _expanded={{ bg: 'black', color: 'white', border: '5px' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Price
                                </Box>
                                <MdOutlineArrowForwardIos />
                            </AccordionButton>
                        </h2>

                        {/* display when user extend filter */}
                        <AccordionPanel pt={5}>
                            <Flex gap="6px">
                            <Input placeholder="min" value={min} onChange={(e)=>{setMin(e.target.value)}}  /> 
                            <Text mt="7px">to</Text>
                            <Input placeholder="max" value={max} onChange={(e)=>{setMax(e.target.value)}}  /> 
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
               

                {/* map all fliters */}
                {filtersList.map((el) => (

                    // filter 
                    <AccordionItem key={el.id} m="2">
                        <h2>
                            <AccordionButton border={"2px"} borderColor="black" _expanded={{ bg: 'black', color: 'white', border: '5px' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    {el.opt}
                                </Box>
                                <MdOutlineArrowForwardIos />
                            </AccordionButton>
                        </h2>


                        {/* display when user extend filter */}
                        <AccordionPanel pb={4}>
                            {el.moreOpt.map((item) => (
                                <Box w="full" >
                                     <Checkbox colorScheme='red' key={item.id} w="full" float={"left"} pt="5px" pb="5px" onChange={()=>{setBrand([...brand, item])}}>
                                        {item}
                                     </Checkbox>
                                
                                </Box>
                                // <Text> {item} </Text>
                            ))}
                            
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

        </Wrap>
        {/*  filters over here */}

    </>)
}

const filtersList = [
    { opt: "Brands", moreOpt: ["Arrow","Tommy Hilfiger","Calvin Klein","Arrow Newyork","U.S. Polo Assn. Denim Co.", "U.S. Polo Assn.", "Calvin Klein Jeans",] },
    { opt: "Size", moreOpt: ["28", "30", "32", "34", "36", "38", "M", "L"] },
{ opt: "Color", moreOpt: ["White", "Black", "Blue", "Red", "Green", "Yellow", "Orange",] },
{ opt: "Promotion", moreOpt: ["Buy at 10% Off"] },
{ opt: "Fit", moreOpt: ["Skinny Fit", "Slim Fit", "Regular Fit", "Tapered Fit", "Straight Fit"] },
{ opt: "Material", moreOpt: ["Cotton", "Lyocell", "Tencel", "Other"] },
{ opt: "Occasion", moreOpt: ["Casual", "Party Wear"] },
{ opt: "Waist Rise", moreOpt: ["Mid Rise", "Low Rise"] },
{ opt: "Length", moreOpt: ["Full Length", "Short Length"] },
{ opt: "Distressing", moreOpt: ["Clean Look", "Lightly Distressed", "Heavily Distressed"] },
{ opt: "Wash", moreOpt: ["Stone Washed", "Rinsed", "Dark Washed", "Dyed", "Tinted", "Beached"] },
{ opt: "Pockets", moreOpt: ["1", "2", "3", "4"] },
{ opt: "Closure", moreOpt: ["Button", "Drawstring"] },
{ opt: "Stretch", moreOpt: ["Stretchable", "No Stretchable"] },
{ opt: "Wash Care", moreOpt: ["Machine Wash"] },
{ opt: "Sustainable", moreOpt: ["Regular", "Sustainable"] }]

export default Filters