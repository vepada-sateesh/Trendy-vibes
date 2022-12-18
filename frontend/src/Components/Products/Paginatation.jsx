import { Button, Box} from "@chakra-ui/react"
import { MdNavigateNext } from 'react-icons/md';

function Paginatation({limit, setLimit}){
    return(
        <>
        <Box w="fit-content" m="auto" p="5">
            <Button colorScheme={"red"} variant="outline" onClick={()=>{ setLimit(limit+5) }}> More Products </Button>
        </Box>
        </>
    )
}

export default Paginatation