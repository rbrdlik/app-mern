import { Link, useParams } from "react-router-dom";

export function Created(){
    const { id } = useParams();
    return(
        <>
            <h1>New Album created: </h1>
            <p>ID: {id}</p>
            <Link to={`/album-view/${id}`}>
                <p>View Album</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}