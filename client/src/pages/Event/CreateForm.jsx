import { useInsertionEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createEvent } from "../../models/event"

export function CreateForm(){
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const sendData = async () => {
        const res = await createEvent(formData);
        if(res.status === 201) return navigate(`/created-event/${res.payload._id}`)
        setInfo(res.message);
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleButton = (e) => {
        e.preventDefault();
        sendData();
    }

    return(
        <>
            <h1>Create Event</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
                <input type="datetime-local" name="date" placeholder="Enter date" required onChange={handleInput}/>
                <input type="text" name="game" placeholder="Enter game" required onChange={handleInput}/>
                <input type="text" name="members" placeholder="Enter members" required onChange={handleInput}/>
                <button onClick={handleButton}>
                    Add event
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}