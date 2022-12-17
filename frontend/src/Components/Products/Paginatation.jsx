import { Button, Flex, IconButton } from "@chakra-ui/react"
import { MdNavigateNext } from 'react-icons/md';

function Paginatation(){
    return(
        <>
        <Flex float={"right"} gap="2" p="5">
            <Button colorScheme={"red"} variant="outline"> First Page </Button>
            <Button colorScheme={"red"} variant="outline"> Prev </Button>
            <Button colorScheme={"red"} variant="outline"> Next </Button>
            <Button colorScheme={"red"} variant="outline"> Last Page </Button>
        </Flex>
        </>
    )
}

export default Paginatation