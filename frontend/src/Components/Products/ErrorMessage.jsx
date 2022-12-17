import { Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

function ErrorMessage(){
    
    const isError = useSelector((store) => store.ProductReducer.isError)
    return(<>
    <Box w="full">
        {/* error message */}
    <Text fontSize={"3xl"} color="red" as="b"> {isError} </Text>
    <Text fontSize={"xl"} > "Please Check Your Network Connection" </Text>
    </Box>
    </>)
}

export default ErrorMessage