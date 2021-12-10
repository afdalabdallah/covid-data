import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import DirawatCard from '../components/DirawatCard'
import LineGraph from '../components/LineGraph'
import LineRechart from '../components/LineRechart'
import NegatifCard from '../components/NegatifCard'
import PositifCard from '../components/PositifCard'
import SembuhCard from '../components/SembuhCard'

function DataIndo() {
    return (
        <Box height="556px" bgColor="#FFD6C3" marginBottom={180}>
            <Grid
            templateColumns="repeat(3, 527px)"
            templateRows="repeat(5, 111px)"
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <PositifCard/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <NegatifCard/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <SembuhCard />
                </GridItem>
                <GridItem rowSpan={3} colSpan={2} paddingLeft="85px">
                        <Box marginTop="24px" height="235px" width="900px" >
                            <LineGraph casesType="cases" deathCases="deaths" recCases="recovered"/>
                            {/* <LineRechart casesType="cases" /> */}
                        </Box>
                </GridItem>
                <GridItem rowSpan={3} colSpan={1} marginTop={10}>
                    <DirawatCard />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default DataIndo
