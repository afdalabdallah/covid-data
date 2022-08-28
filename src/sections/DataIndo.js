import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import DirawatCard from '../components/DirawatCard'
import LineGraph from '../components/LineGraph'
import LineRechart from '../components/LineRechart'
import NegatifCard from '../components/NegatifCard'
import PositifCard from '../components/PositifCard'
import SembuhCard from '../components/SembuhCard'

function DataIndo() {
    const [covid, setCovid] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
            const data = await response.json();
            setCovid(data);
            // console.log(data);     
        };
        fetchData();
    }, []);
    return (
        <Box height="556px" bgColor="#FFD6C3" marginBottom={180} id="data_indo">
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
                    <Text align={'right'} fontStyle={'italic'} fontSize={14} marginTop={10} marginRight={2}>Last update: {covid.lastUpdate}</Text>
                </GridItem> 
            </Grid>
        </Box>
    )
}

export default DataIndo
