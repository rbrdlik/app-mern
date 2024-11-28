import { Link } from "react-router-dom";

export default function ListLink(props){
    return(
        <>
            <Link to={`/event-view/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    );
}