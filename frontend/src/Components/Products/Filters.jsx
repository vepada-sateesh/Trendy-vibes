import { Accordion, AccordionPanel, AccordionButton, AccordionItem, AccordionIcon, Box, Heading, Checkbox, Divider, Wrap, Button, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Filters() {
    return (<>

        {/*  Category  */}
        <Wrap w="full" direction={"column"}>
            <Heading as='h5' size='sm' align={'left'} >
                CATEGORY
            </Heading>

            {/* catogory checkboxes */}
            <Checkbox pl="7%" colorScheme='red' >Jeans</Checkbox>
            <Divider />
            <Checkbox pl="7%" colorScheme='red'>New Arrivals</Checkbox>
            <Checkbox pl="7%" colorScheme='red'>On Sale</Checkbox>
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
                                <Box w="full" > <Checkbox colorScheme='red' key={item.id} w="full" float={"left"} pt="5px" pb="5px">{item}</Checkbox></Box>
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

const filtersList = [{ opt: "Size", moreOpt: ["28", "30", "32", "34", "36", "38", "M", "L"] },
{ opt: "Color", moreOpt: ["White", "Black", "Blue", "Red", "Green", "Yellow", "Orange",] },
{ opt: "Promotion", moreOpt: ["Buy at 10% Off"] },
{ opt: "Price", moreOpt: ["Below Rs. 999", "Rs. 1000 - Rs. 1499", "Above Rs. 1500"] },
// {opt:"Store", moreOpt:[]},
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