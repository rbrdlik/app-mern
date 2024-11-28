import { Link, useParams } from "react-router-dom";

export function Created(){
    const { id } = useParams();
    return(
        <>
            <h1>New monkey created: </h1>
            <p>ID: {id}</p>
            <Link to={`/monkey-view/${id}`}>
                <p>View Monkey</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}