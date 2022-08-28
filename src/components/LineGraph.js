import React,{useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import numeral from 'numeral';
import { LineChart } from 'recharts';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0.5,
    },
  },
  // maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales:{
    x:{
      display: false,
    },
    y:{
      // display: false,
    }
  }
};

const buildChartData = (data, casesType) => {
    let chartData =[];
    for(let i = data.length-365;i < data.length ;i++){
      let newDataPoint = {
         x: data[i].tanggal.toString().slice(0,10),
         y: data[i][casesType]
      }
      chartData.push(newDataPoint)
    }
    
    return chartData;
}

function LineGraph({ casesType, deathCases, recCases }) {
    const [posData, setPos] = useState({})
    const [deathData, setDeath] = useState({})
    const [recData, setRec] = useState({})
    var cek = false;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian")
            const data = await response.json();
            // console.log(data);     
            setDeath(buildChartData(data, "meninggal"));
            setRec(buildChartData(data, "sembuh"));
            setPos(buildChartData(data, "positif")); 
            cek = true;
        };
        fetchData();
    }, []);
  
    return (
        <div>
            {posData?.length > 0 && (
            <Line
          
            height={'100px'}
            options={options}
            data={{
                datasets: [
                {
                    backgroundColor: "#CC1034",
                    borderColor: "#CC1034",
                    data: posData,
                    label: "Total kasus",
                    gridLines: false,
                    lineTension: 0.4
                },
                {
                  data: deathData,
                  borderColor:"black",
                  label: "Meninggal",
                  backgroundColor: "black",
                  gridLines: false,
                  lineTension: 0.4
                },
                {
                  data: recData,
                  borderColor:"blue",
                  label: "Sembuh",
                  backgroundColor: "blue",
                  gridLines: false,
                  lineTension: 0.4
                }
                
                ],
                
            }}
            
            />
            
            )}
            
        </div>
    )
}

export default LineGraph
