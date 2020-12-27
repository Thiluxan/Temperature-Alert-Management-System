import React from 'react'
import {Line} from 'react-chartjs-2'
import {useLocation} from 'react-router-dom'

function Chart({sid}) {
    let msg = useLocation()
    let dataArray = msg.state.reading.reading
    console.log(dataArray)
    let dateArray = []
    let temperatureArray = []

    dataArray.map(data => {
        dateArray.push(data.date.toString())
        temperatureArray.push(data.temperature)
    })    

    let grapghData = {
        labels:dateArray,
        datasets:[
            {
                label:'Temperature Readings (Celsius)',
                data:temperatureArray,
                backgroundColor:'transparent',
                borderColor:'blue',
                pointBackgroundColor:'black'
            }
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Line Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                }
            }]
        }
    }


    return (
        <div>
            <div className="chart">
                <h3>Sensor {dataArray[0].sensor} - Temperature Readings</h3>
                <Line data={grapghData} options={options}/>                
            </div>
        </div>
    )
}

export default Chart
