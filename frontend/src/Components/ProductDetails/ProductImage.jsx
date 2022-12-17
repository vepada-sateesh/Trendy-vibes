import { Box, Image } from "@chakra-ui/react"
import ReactImageZoom from 'react-image-zoom';

function ProductImage(){
    const props = {width: 400, height: 500,zoomPosition:"original",zoomLensStyle:"opacity",  img:"https://cdn16.nnnow.com/web-images/large/styles/O47AOWZ5N10/1650696376774/1.jpg"};
   return(<>

<Box w={{base:"full", md:"400px", lg:"400px"}} p="5" ml="auto" cursor={"zoom-in"} overflow="hidden"  _hover={{ boxShadow:"2xl"}} >

<ReactImageZoom {...props} />
    {/* <Image h="400px" src="https://cdn16.nnnow.com/web-images/large/styles/O47AOWZ5N10/1650696376774/1.jpg" /> */}
    </Box>
    </>)
}

export default ProductImage