import React from 'react'
import {useLocation} from 'react-router-dom'

function Table() {
    let msg = useLocation()
    let dataArray = msg.state.reading.reading

    return (
        <div className="tabular">
            <h3>Sensor {dataArray[0].sensor} - Temperature Readings</h3>
                {
                    dataArray === [] ? 
                    'Empty Data set' : 
                    (
                        
                        <table>
                            
                            <thead>
                                <th>Date - Time</th>
                                <th>Reading (Celsius)</th>
                            </thead>
                            {
                                dataArray.map(readble => (
                                    <tr>
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

export default Table
