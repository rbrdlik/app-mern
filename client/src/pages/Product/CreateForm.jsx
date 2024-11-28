import { useInsertionEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../models/product"

export function CreateForm(){
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const sendData = async () => {
        const res = await createProduct(formData);
        if(res.status === 201) return navigate(`/created-product/${res.payload._id}`)
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
            <h1>Create Product</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
                <input type="number" name="price" placeholder="Enter price" required onChange={handleInput}/>
                <input type="text" name="description" placeholder="Enter description" required onChange={handleInput}/>
                <button onClick={handleButton}>
                    Add product
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}