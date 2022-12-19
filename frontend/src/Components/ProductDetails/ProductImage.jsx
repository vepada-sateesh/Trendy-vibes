import { Box, Image } from "@chakra-ui/react"
import ReactImageZoom from 'react-image-zoom';
import { useSelector } from "react-redux";

function ProductImage(){
   
    const singleProductDetails = useSelector((store)=>store.ProductReducer.singleProductDetails)


    // singleProductDetails.frontimgsrc
    const props = {width: 400, height: 500,zoomPosition:"original",zoomLensStyle:"opacity",  img:singleProductDetails.frontimgsrc};
   return(<>

<Box w={{base:"full", md:"400px", lg:"400px"}} p="5" ml="auto" cursor={"zoom-in"} overflow="hidden"  _hover={{ boxShadow:"2xl"}} >

{/* <ReactImageZoom {...props} /> */}
    <Image w="400px" h="500" src={singleProductDetails.frontimgsrc} />
    </Box>
    </>)
}

export default ProductImage