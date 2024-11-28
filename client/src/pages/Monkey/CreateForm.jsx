import { useInsertionEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createMonkey } from "../../models/monkeys"

export function CreateForm(){
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const sendData = async () => {
        const res = await createMonkey(formData);
        if(res.status === 201) return navigate(`/created-monkey/${res.payload._id}`)
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
            <h1>Create Monkey</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
                <input type="text" name="race" placeholder="Enter race" required onChange={handleInput}/>
                <input type="text" name="gender" placeholder="Enter gender" required onChange={handleInput}/>
                <button onClick={handleButton}>
                    Add monkey
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}