import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllMonkeys } from "../../models/monkeys"
import ListLink from "./ListLink";

export function ViewAll(){
    const [monkeys, setMonkeys] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const res = await getAllMonkeys();
        if (res.status === 500 || res.status === 404) return setLoaded(null);
        if (res.status === 200){
            setMonkeys(res.payload); 
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    if(isLoaded === null){
        return(
            <>
                <p>Monkeys not found</p>
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
            <h1>Monkey list</h1>
            {
                monkeys.map((monkey, index) => (
                    <ListLink key={index} {...monkey}/>
                ))
            }

            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </>
    )
}