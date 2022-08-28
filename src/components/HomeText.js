import React,{useEffect,useState} from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function HomeText() {
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
    let tanggal = covid.lastUpdate?.slice(0,10);
    // let tahun = tanggal?.slice(0,4);
    // let bulan = parseInt(tanggal?.slice(5,7));
    // let hari = tanggal?.slice(8, 10);
    const namaBulan = [
        'January', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]
    let month = namaBulan[2];
    return (
        <Grid
        w="80%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
        margin="auto"
        marginTop="1%"
        fontFamily="Montserrat"
        color="#545DCA"
            >
            <GridItem rowSpan={1} colSpan={1} >
                <Text fontSize="64px" fontWeight="700">
                    Data Terkini
                </Text>
            </GridItem>
            <GridItem marginTop="3%" rowSpan={2} colSpan={1}   borderRadius="100px" bgColor="#6670DF" textAlign="center" w="572px" h="103px">
               <Text marginTop="4px" fontSize="60.78px" fontWeight="bold" color="#FFF">
                   {covid.positif} kasus
                </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} fontSize="21.33px">
                Jumlah kasus penyebaran Covid - 19 di 
                <br/>
                Indonesia sampai saat ini
                <br/>
                <Text marginTop="8px" fontSize="13.48px" fontStyle="italic">{tanggal}</Text>
            </GridItem>
        </Grid>
    )
}
