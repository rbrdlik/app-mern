import { Link, useParams, useNavigate } from "react-router-dom"
import { getProductById, deleteProduct } from "../../models/product"
import { useState, useEffect } from "react"

export function View(){
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
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

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(product.name === formData){
            const data = await deleteProduct(id);
            if(data.status === 200) return navigate("/");
            setInfo(data.message);
        }
        setInfo("Wrong input");
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
            <h1>View Product</h1>
            <p>ID: {id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <form>
                <input type="text" placeholder={product.name} onChange={handleChange}/>
                <button onClick={handleDelete}>Delete</button>
                <p>{info}</p>
            </form>
            <Link to={`/product-edit/${id}`}>
                <button>Edit product</button>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}