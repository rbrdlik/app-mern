import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateMonkey, getMonkeyById } from "../../models/monkeys"

export function UpdateForm(){
    const { id } = useParams();
    const [monkey, setMonkey] = useState();
    const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
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

    const sendData = async () => {
        const res = await updateMonkey(id, formData);
        if(res.status === 200) return navigate(`/monkey-view/${res.payload._id}`)
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
            <h1>Update Monkey</h1>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue={monkey.name}/>
                <input type="text" name="race" placeholder="Enter race" required onChange={handleInput} defaultValue={monkey.race}/>
                <input type="text" name="gender" placeholder="Enter gender" required onChange={handleInput} defaultValue={monkey.gender}/>
                <button onClick={handleButton}>
                    Edit monkey
                </button>
            </form>
            <p>{info}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}