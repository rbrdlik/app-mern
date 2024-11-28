import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllBooks } from "../../models/book"
import ListLink from "./ListLink";

export function ViewAll(){
    const [books, setBooks] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const res = await getAllBooks();
        if (res.status === 500 || res.status === 404) return setLoaded(null);
        if (res.status === 200){
            setBooks(res.payload); 
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    if(isLoaded === null){
        return(
            <>
                <p>Books not found</p>
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
            <h1>Book list</h1>
            {
                books.map((book, index) => (
                    <ListLink key={index} {...book}/>
                ))
            }

            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </>
    )
}