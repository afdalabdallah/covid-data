import { Image } from '@chakra-ui/image'
import { Box, HStack, StackItem, Text } from '@chakra-ui/layout'
import React, {useRef} from 'react'
import { Link as LinkS } from 'react-scroll'
import SearchInput from '../components/SearchInput';
import "@fontsource/montserrat";
import NavMenu from '../components/NavMenu';

function Navbar() {
    return (
        <Box height="109" bgColor="#FFFFFF" className="navbar" paddingLeft="53px" paddingTop="16px" paddingRight="53px" position={'sticky'} zIndex={2}>
            <HStack justify={'space-between'} width={'100%'}>
                <StackItem>
                    <HStack spacing="18px">
                        <StackItem>
                            <Image src='./LOGO_1.png' width="136px" height="78px"/>
                        </StackItem>
                        <StackItem> 
                            <SearchInput/>
                        </StackItem>
                    </HStack>
                </StackItem>
                <StackItem>
                    <NavMenu/>
                </StackItem>

            </HStack>
        </Box>
    )
}

export default Navbar
