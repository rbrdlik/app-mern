import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateAlbum, getAlbumById } from "../../models/album"

export function UpdateForm(){
    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getAlbumById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setAlbum(data.payload);
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, [])

    const sendData = async () => {
        const res = await updateAlbum(id, formData);
        if(res.status === 200) return navigate(`/album-view/${res.payload._id}`)
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
                <p>Album not found</p>
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
            <h1>Update Album</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue={album.name}/>
                <input type="text" name="artist" placeholder="Enter artist" required onChange={handleInput} defaultValue={album.artist}/>
                <input type="number" name="year" placeholder="Enter year" required onChange={handleInput} defaultValue={album.year}/>
                <button onClick={handleButton}>
                    Edit album
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}