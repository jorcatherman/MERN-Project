import React, {useState} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

export default props =>{
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [catchphrase, setCatchphrase] = useState("")
    const [chests, setChests]= useState()
    const [peg_leg, setPeg_leg] = useState(false)
    const [eye_patch, setEye_patch] = useState(false)
    const [hook_hand, setHook_hand] = useState(false)
    const [position, setPosition] = useState()

    const onSubmitHandler = e=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirates', {
            name,
            img,
            catchphrase,
            chests,
            peg_leg,
            eye_patch,
            hook_hand,
            position
        })
        .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
        
    }

    return(
        <div>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            
        
            <h1>
                Add Pirate
            </h1>
            <Link to ='/'>Crew Board </Link>
            <p>
                {/* {
                    errors.name ?
                    <p>{errors.name.message}</p>:
                    ''
                } */}
                <label>Pirate Name:</label><br/>
                <input type='text' onChange = { (e) => setName(e.target.value)} value={name}/>
            </p>
            <p>
            {/* {
                    errors.img ?
                    <span>{errors.img.message}</span>:
                    <span></span>
                } */}
                <label>Pirate Selfie:</label><br/>
                <input type='text' onChange = { (e) => setImg(e.target.value)} value ={img}/>
            </p>
            <p>
            {/* {
                    errors.chests ?
                    <span>{errors.chests.message}</span>:
                    <span></span>
                } */}
                <label htmlFor='chests'># of treasure chests:</label><br/>
                <select id='chests' name='chests' onChange ={ (e) => setChests(e.target.value)} value ={chests}>
                    <option value=''></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </p>
            <p>
            {/* {
                    errors.catchphrase ?
                    <span>{errors.catchphrase.message}</span>:
                    <span></span>
                } */}
                <label>Pirate Catch Phrase:</label><br/>
                <input type='text' onChange = { (e) => setCatchphrase(e.target.value)} value ={catchphrase}/>
            </p>
            <p>
            {/* {
                    errors.peg_leg ?
                    <span>{errors.peg_leg.message}</span>:
                    <span></span>
                } */}
                <label>Peg Leg:</label><br/>
                <input type='checkbox' onChange = { (e) => setPeg_leg(e.target.value)} value ={peg_leg}/>
            </p>
            <p>
            {/* {
                    errors.eye_patch ?
                    <span>{errors.eye_patch.message}</span>:
                    <span></span>
                } */}
                <label>Eye Patch:</label><br/>
                <input type='checkbox' onChange = { (e) => setEye_patch(e.target.value)} value ={eye_patch} />
            </p>
            <p>
            {/* {
                    errors.hook_hand ?
                    <span>{errors.hook_hand.message}</span>:
                    <span></span>
                } */}
                <label>Hook hand:</label><br/>
                <input type='checkbox' onChange = { (e) => setHook_hand(e.target.value)} value = {hook_hand}/>
            </p>
            <p>
            {/* {
                    errors.position ?
                    <span>{errors.position.message}</span>:
                    <span></span>
                } */}
                <label>Position:</label><br/>
                <select id='position' name='position' onChange = { (e) => setPosition(e.target.value)} value = {position}>
                    <option value=''></option>
                    <option value='Captain'>Captain</option>
                    <option value='First Mate'>First Mate</option>
                    <option value='Quarter Master'>Quarter Master</option>
                    <option value='Bootswain'>Bootswain</option>
                    <option value='Powder Monkey'>Powder Monkey</option>
                </select>
            </p>
            <input type ="submit" value="Add Pirate"></input>
            <Link to ='/'></Link>
        </form>
        </div>
    )
}