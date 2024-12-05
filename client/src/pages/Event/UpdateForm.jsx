import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateEvent, getEventById } from "../../models/event"

export function UpdateForm(){
    const { id } = useParams();
    const [event, setEvent] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
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

    const sendData = async () => {
        const res = await updateEvent(id, formData);
        if(res.status === 200) return navigate(`/event-view/${res.payload._id}`)
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
            <h1>Update Event</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue={event.name}/>
                <input type="datetime-local" name="date" placeholder="Enter date" required onChange={handleInput} defaultValue={event.date}/>
                <input type="text" name="game" placeholder="Enter game" required onChange={handleInput} defaultValue={event.game}/>
                <input type="text" name="members" placeholder="Enter members" required onChange={handleInput} defaultValue={event.members}/>
                <button onClick={handleButton}>
                    Edit event
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}