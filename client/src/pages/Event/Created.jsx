import { Link, useParams } from "react-router-dom";

export function Created(){
    const { id } = useParams();
    return(
        <>
            <h1>New event created: </h1>
            <p>ID: {id}</p>
            <Link to={`/event-view/${id}`}>
                <p>View Event</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}