import React from 'react'
import {Box, Text, Image, Center, Link} from '@chakra-ui/react'
import "@fontsource/montserrat";
import { Link as LinkS } from 'react-scroll'

function IndonesiaMap() {
    return (
        <Box w="100%" h="100%" bgColor="#FFF" >
            <Center >
                <Box>
                <Image src='./indonesia_map.svg'/>
                </Box>
            </Center>
            <Center>
                <LinkS to="data_indo" spy={true} smooth={false}  offset={-130}>
                    <Box width={'193px'} height={'44px'} backgroundColor={'#6670DF'} borderRadius={'23px'} marginTop={12} paddingTop={'10px'} cursor={'pointer'}>
                        <Text 
                        align={'center'}
                        fontSize="12sp" 
                        fontFamily="Montserrat"
                        fontWeight={'medium'}
                        color="white">
                            Lihat rincian
                        </Text>
                    </Box>
                </LinkS>
                
            </Center>
        </Box>
    )
}

export default IndonesiaMap
