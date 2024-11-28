import { Link, useParams } from "react-router-dom";

export function Created(){
    const { id } = useParams();
    return(
        <>
            <h1>New book created: </h1>
            <p>ID: {id}</p>
            <Link to={`/book-view/${id}`}>
                <p>View Book</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}