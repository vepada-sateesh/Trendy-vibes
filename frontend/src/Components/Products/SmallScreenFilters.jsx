import { BiFilterAlt } from 'react-icons/bi'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react'
import React from 'react'
import Filters from './Filters'

function SmallScreenFilters({setDiscount, setBrand, setMin, setMax, min, max}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    
    return (
      <>

        <IconButton ref={btnRef} colorScheme='red' onClick={onOpen} aria-label='Filters' icon={<BiFilterAlt />} float={"left"} />

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Apply Filters</DrawerHeader>
  
            <DrawerBody>

              <Filters setDiscount={setDiscount} setBrand={setBrand} setMin={setMin} setMax={setMax} min={min} max={max}/>
            
            </DrawerBody>
  
            <DrawerFooter>
              <Button bg="#ff3399" color="white" mr={3} onClick={onClose} float="">
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default SmallScreenFilters