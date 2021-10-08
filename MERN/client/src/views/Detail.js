import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import { Link } from '@reach/router'

export default props => {
    const { id } = props;
    // const [errors, setErrors] = useState({

    // })
    const [broken, setBroken] = useState(false)
    const [pirate, setPirate] = useState({
        name: '',
        img: '',
        catchphrase: '',
        chests: '',
        peg_leg: '',
        eye_patch: '',
        hook_hand: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(response => {
                const res = response.data;
                if (res.message === "success") {
                    setPirate(res.data)
                } else {
                    navigate('/')
                }
            })

            .catch(err => setBroken(true))
    }, [id])
    return (
        <>
        <Link to='/'>Dashboard</Link>
            {
                broken ?
                    <h1>Currently Broken</h1>
                    :
                    <>
                    <div>
                        <h2>{pirate.name}</h2>
                        <img src={pirate.img}/>
                        <h2>"{pirate.catchphrase}"</h2>
                        <h2>Treasures: {pirate.chests}</h2>
                        <h2>Position: {pirate.position}</h2>
                        <h2>Peg Leg: {pirate.peg_leg.toString()}</h2>
                        <h2>Eye Patch: {pirate.eye_patch.toString()}</h2>
                        <h2>Hook Hand: {pirate.hook_hand.toString()}</h2>

                    </div>
                    </>
            }
        </>
    )
}