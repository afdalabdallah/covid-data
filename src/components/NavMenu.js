import React from 'react'
import { Box, HStack, StackItem, Text } from '@chakra-ui/layout'
import { Link as LinkS } from 'react-scroll'
import "@fontsource/montserrat";

function NavMenu() {
    return (
        <HStack 
            color="#F57A3F" 
            fontFamily="Montserrat" 
            fontWeight="medium" 
            fontSize="21"
            spacing="90px">
            <StackItem>
                <LinkS to="home" spy={true} smooth={true}  offset={-130}>
                    <Text cursor="pointer" textDecoration={'none'}> Home</Text>  
                </LinkS>
            </StackItem>
            <StackItem>
                <LinkS to="protokol" spy={true} smooth={true} cursor="pointer" offset={-205}>
                    <Text cursor="pointer">Mengenal 3M</Text>
                </LinkS>
            </StackItem>
            <StackItem>
                <LinkS to="artikeltitle" spy={true} smooth={true} cursor="pointer" offset={100}>
                    <Text cursor="pointer">Artikel</Text>
                </LinkS>
            </StackItem>
        </HStack>        
    )
}

export default NavMenu
