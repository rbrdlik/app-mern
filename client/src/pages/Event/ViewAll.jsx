import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllEvents } from "../../models/event"
import ListLink from "./ListLink";

export function ViewAll(){
    const [events, setEvents] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const res = await getAllEvents();
        if (res.status === 500 || res.status === 404) return setLoaded(null);
        if (res.status === 200){
            setEvents(res.payload); 
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    if(isLoaded === null){
        return(
            <>
                <p>Events not found</p>
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
            <h1>Event list</h1>
            {
                events.map((event, index) => (
                    <ListLink key={index} {...event}/>
                ))
            }

            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </>
    )
}