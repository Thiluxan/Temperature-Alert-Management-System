import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Home() {
    const [reading,setReading] = useState({})
    const[sensors,setSensors] = useState([])
    const [id,setId] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8081/readings/0`)
        .then(response => {
            console.log(response.data)
            setReading(response.data)
        })

        axios.get('http://localhost:8081/sensors')
        .then(response => {
            console.log(response.data)
            setSensors(response.data)
        })
    },[])

    const onSensorChange = e => {
        let sid = e.target.value
        setId(e.target.value)
        axios.get(`http://localhost:8081/readings/${sid}`)
        .then(response => {
            console.log(response.data)
            setReading(response.data)
        })


    }

    return (
        <div className="home">
                <select name="sensor" onChange={onSensorChange}>
                {sensors.map(sensor => (
                    <option value={sensor.id} key={sensor.id}>{sensor.name}</option>
                    
                ))}
                </select>
            
            <br/><br/>
            <Link to={{
                pathname:'/table',
                state:{reading:{reading}}
            }}><button>Tabular Form</button></Link>
            <br/><br/>
            <Link to={{
                pathname:'/graph',
                state:{reading:{reading}}
            }}><button>Graphical Form</button></Link>
        </div>
    )
}
