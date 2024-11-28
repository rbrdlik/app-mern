import { useInsertionEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createAlbum } from "../../models/album"

export function CreateForm(){
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const sendData = async () => {
        const res = await createAlbum(formData);
        if(res.status === 201) return navigate(`/created-album/${res.payload._id}`)
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
            <h1>Create Album</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
                <input type="text" name="artist" placeholder="Enter artist" required onChange={handleInput}/>
                <input type="number" name="year" placeholder="Enter year" required onChange={handleInput}/>
                <button onClick={handleButton}>
                    Add album
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}