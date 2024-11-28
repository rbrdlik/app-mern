import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllAlbums } from "../../models/album"
import ListLink from "./ListLink";

export function ViewAll(){
    const [albums, setAlbums] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const res = await getAllAlbums();
        if (res.status === 500 || res.status === 404) return setLoaded(null);
        if (res.status === 200){
            setAlbums(res.payload); 
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    if(isLoaded === null){
        return(
            <>
                <p>Albums not found</p>
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
            <h1>Album list</h1>
            {
                albums.map((album, index) => (
                    <ListLink key={index} {...album}/>
                ))
            }

            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </>
    )
}