import React from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
const PirateList = props => {
    const { pirate } = props;
    const { removeFromDom } = props;
    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
    }
    return (
        <div>
            <h4>{pirate.name}</h4>
            <img src = {pirate.img}></img>
            <p>
                <button>
                <Link to={"/pirates/" + pirate._id}>View this Pirate</Link>
                </button>
            
                |
                <button onClick={(e) => { deletePirate(pirate._id) }}>Walk The Plank</button>
                </p>

        </div>



        // <div>
        //     <h1>Pirate Crew</h1>
        //             <Link to='/pirates/new/'>Add Pirate</Link>
        //     {props.pirate.map((pirate, i) => {
        //         return <>


        //             <h3 key ={i}> <img src={pirate.img}></img>  {pirate.name}</h3>
        //             <h3></h3>

        //         </>
        //     })}
        // </div>
    )
}
export default PirateList