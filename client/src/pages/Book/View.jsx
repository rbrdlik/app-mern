import { Link, useParams, useNavigate } from "react-router-dom"
import { getBookById, deleteBook } from "../../models/book"
import { useState, useEffect } from "react"

export function View(){
    const { id } = useParams();
    const [book, setBook] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getBookById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setBook(data.payload);
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
        if(book.name === formData){
            const data = await deleteBook(id);
            if(data.status === 200) return navigate("/");
            setInfo(data.message);
        }
        setInfo("Wrong input");
    }

    if(isLoaded === null){
        return(
            <>
                <p>Book not found</p>
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
            <h1>View Book</h1>
            <p>ID: {id}</p>
            <p>Name: {book.name}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <form>
                <input type="text" placeholder={book.name} onChange={handleChange}/>
                <button onClick={handleDelete}>Delete</button>
                <p>{info}</p>
            </form>
            <Link to={`/book-edit/${id}`}>
                <button>Edit book</button>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}