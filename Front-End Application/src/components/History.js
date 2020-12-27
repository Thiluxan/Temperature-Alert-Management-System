import React,{useState,useEffect} from 'react'
import axios from 'axios'

function History() {
    const [reading, setReading] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/readings`)
        .then(response => {
            console.log(response.data)
            setReading(response.data)
        })
    },[])
    return (
        <div className="tabular">
            <h3>Entire Data Recorded</h3>
            {
                    reading === [] ? 
                    'Empty Data set' : 
                    (
                        <table>
                            <thead>
                                <th>Sensor</th>
                                <th>Date - Time</th>
                                <th>Reading (Celsius)</th>
                            </thead>
                            {
                                reading.map(readble => (
                                    <tr>
                                        <td>Sensor {readble.sensor}</td>
                                        <td>{readble.date}</td>
                                        <td>{readble.temperature}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    )
                }
        </div>
    )
}

export default History
