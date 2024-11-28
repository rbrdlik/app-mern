import { Link, useParams, useNavigate } from "react-router-dom"
import { getEventById, deleteEvent } from "../../models/event"
import { useState, useEffect } from "react"

export function View(){
    const { id } = useParams();
    const [event, setEvent] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getEventById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setEvent(data.payload);
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
        if(event.name === formData){
            const data = await deleteEvent(id);
            if(data.status === 200) return navigate("/");
            setInfo(data.message);
        }
        setInfo("Wrong input");
    }

    if(isLoaded === null){
        return(
            <>
                <p>Event not found</p>
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
            <h1>View Event</h1>
            <p>ID: {id}</p>
            <p>Name: {event.name}</p>
            <p>Date: {event.date}</p>
            <p>Game: {event.game}</p>
            <p>Members: {event.members}</p>
            <form>
                <input type="text" placeholder={event.name} onChange={handleChange}/>
                <button onClick={handleDelete}>Delete</button>
                <p>{info}</p>
            </form>
            <Link to={`/event-edit/${id}`}>
                <button>Edit event</button>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}