import { useInsertionEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createBook } from "../../models/book"

export function CreateForm(){
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const sendData = async () => {
        const res = await createBook(formData);
        if(res.status === 201) return navigate(`/created-book/${res.payload._id}`)
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
            <h1>Create Book</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
                <input type="text" name="author" placeholder="Enter author" required onChange={handleInput}/>
                <input type="text" name="genre" placeholder="Enter genre" required onChange={handleInput}/>
                <button onClick={handleButton}>
                    Add book
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}