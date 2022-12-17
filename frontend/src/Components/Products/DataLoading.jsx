import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react"

function DataLoading(){
    return(<>
    
    <Center h="55vh" w="full">
    <Box>

        {/* prograss bar */}
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='#ea0020'
  size='xl'
/>

{/* loading message */}
<Heading as='h4' size='md' > Please Wait  </Heading>
</Box>
</Center>
    

    </>)
}

export default DataLoading