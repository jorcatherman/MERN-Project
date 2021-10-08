import React, { useEffect, useState } from 'react'
import PirateForm from '../components/PirateForm'
import PirateList from '../components/PirateList'
import axios from 'axios'
import { Link } from '@reach/router'

export default () => {
    const [pirate, setPirate] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates')
            .then(response => setPirate(response.data.data))
            .catch(err => setLoaded(true))
    }, [])

    const removeFromDom = pirateId =>{
        setPirate(pirate.filter(pirate => pirate._id != pirateId))
    }
    return(
        <div>
            <h1>Mighty Crew</h1>
            <Link to='/pirates/new'>Add a Pirate</Link>
            {
                loaded ?
                <h1>Big Problem</h1>
                :
                pirate.map((item,i) => <PirateList key={i} pirate={item} removeFromDom={removeFromDom} />)
            }
        </div>
    )
}
