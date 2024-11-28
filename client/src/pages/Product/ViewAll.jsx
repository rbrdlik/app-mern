import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllProducts } from "../../models/product"
import ListLink from "./ListLink";

export function ViewAll(){
    const [products, setProducts] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const res = await getAllProducts();
        if (res.status === 500 || res.status === 404) return setLoaded(null);
        if (res.status === 200){
            setProducts(res.payload); 
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    if(isLoaded === null){
        return(
            <>
                <p>Products not found</p>
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
            <h1>Product list</h1>
            {
                products.map((product, index) => (
                    <ListLink key={index} {...product}/>
                ))
            }

            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </>
    )
}