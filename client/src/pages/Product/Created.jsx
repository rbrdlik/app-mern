import { Link, useParams } from "react-router-dom";

export function Created(){
    const { id } = useParams();
    return(
        <>
            <h1>New product created: </h1>
            <p>ID: {id}</p>
            <Link to={`/product-view/${id}`}>
                <p>View Product</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}