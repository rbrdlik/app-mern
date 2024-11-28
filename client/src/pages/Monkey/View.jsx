import { Link, useParams, useNavigate } from "react-router-dom"
import { getMonkeyById, deleteMonkey } from "../../models/monkeys"
import { useState, useEffect } from "react"

export function View(){
    const { id } = useParams();
    const [monkey, setMonkey] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getMonkeyById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setMonkey(data.payload);
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
        if(monkey.name === formData){
            const data = await deleteMonkey(id);
            if(data.status === 200) return navigate("/");
            setInfo(data.message);
        }
        setInfo("Wrong input");
    }

    if(isLoaded === null){
        return(
            <>
                <p>Monkey not found</p>
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
            <h1>View Monkey</h1>
            <p>ID: {id}</p>
            <p>Name: {monkey.name}</p>
            <p>Race: {monkey.race}</p>
            <p>Gender: {monkey.gender}</p>
            <form>
                <input type="text" placeholder={monkey.name} onChange={handleChange}/>
                <button onClick={handleDelete}>Delete</button>
                <p>{info}</p>
            </form>
            <Link to={`/monkey-edit/${id}`}>
                <button>Edit monkey</button>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}