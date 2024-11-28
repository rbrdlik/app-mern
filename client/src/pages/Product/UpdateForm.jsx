import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateProduct, getProductById } from "../../models/product"

export function UpdateForm(){
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getProductById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setProduct(data.payload);
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    const sendData = async () => {
        const res = await updateProduct(id, formData);
        if(res.status === 200) return navigate(`/product-view/${res.payload._id}`)
        setInfo(res.message);
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleButton = (e) => {
        e.preventDefault();
        sendData();
    }

    if(isLoaded === null){
        return(
            <>
                <p>Product not found</p>
            </>
        )
    }

    if(!isLoaded){
        return(
            <>
                <p>Loading...</p>
            </>
        )
    }

    return(
        <>
            <h1>Update Product</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue={product.name}/>
                <input type="number" name="price" placeholder="Enter price" required onChange={handleInput} defaultValue={product.price}/>
                <input type="text" name="description" placeholder="Enter description" required onChange={handleInput} defaultValue={product.description}/>
                <button onClick={handleButton}>
                    Edit product
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}