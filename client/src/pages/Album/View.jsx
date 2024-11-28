import { Link, useParams, useNavigate } from "react-router-dom"
import { getAlbumById, deleteAlbum } from "../../models/album"
import { useState, useEffect } from "react"

export function View(){
    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
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

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(album.name === formData){
            const data = await deleteAlbum(id);
            if(data.status === 200) return navigate("/");
            setInfo(data.message);
        }
        setInfo("Wrong input");
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
            <h1>View Album</h1>
            <p>ID: {id}</p>
            <p>Name: {album.name}</p>
            <p>Artist: {album.artist}</p>
            <p>Year: {album.year}</p>
            <form>
                <input type="text" placeholder={album.name} onChange={handleChange}/>
                <button onClick={handleDelete}>Delete</button>
                <p>{info}</p>
            </form>
            <Link to={`/album-edit/${id}`}>
                <button>Edit album</button>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}