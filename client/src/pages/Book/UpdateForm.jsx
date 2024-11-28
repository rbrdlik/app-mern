import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateBook, getBookById } from "../../models/book"

export function UpdateForm(){
    const { id } = useParams();
    const [book, setBook] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
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

    const sendData = async () => {
        const res = await updateBook(id, formData);
        if(res.status === 200) return navigate(`/book-view/${res.payload._id}`)
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
            <h1>Update Book</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue={book.name}/>
                <input type="text" name="author" placeholder="Enter author" required onChange={handleInput} defaultValue={book.author}/>
                <input type="text" name="genre" placeholder="Enter genre" required onChange={handleInput} defaultValue={book.genre}/>
                <button onClick={handleButton}>
                    Edit book
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}