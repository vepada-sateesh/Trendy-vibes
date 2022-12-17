import { Select, Wrap, Heading } from "@chakra-ui/react"

function Sort({setSort}) {
    return (<>

        {/* wrap sort component */}
        <Wrap w="fit-content" float={"right"} pb="10" >
            <Heading size='sm' verticalAlign={"middle"} pt="7px"> SORT: </Heading>

            {/* select sorting option */}
            <Select w={{ base: '150px', md: '200px', lg: '200px' }} h="35px" variant='outline' placeholder='Relevent' border={"1px"} borderRadius="0px" borderColor='black'
            onChange={(e)=>{setSort(e.target.value)}} >
                <option value=''>Popularity</option>
                <option value=''>Newest</option>
                <option value='asc'>Price: Low to High</option>
                <option value='desc'>Price: High to Low</option>
                <option value=''>Discount</option>
            </Select>
        </Wrap>

    </>)
}

export default Sort