import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const ViewOne = () =>{

    const {id} = useParams();

    const [chatter, setChatter] = useState({
        _id: "",
        message: "",
        image: "",
        title: "",
        description: ""
    })

    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:9001/api/chatter/${id}`)
            .then(res =>{
                console.log(res)
                setChatter(res.data.oneMessageById);
                setMessage(res.data.message)
                setImage(res.data.image)
                setDescription(res.data.description)
                setTitle(res.data.title)
            })
            .catch(err =>{
                console.log(err)
            })
    })

    return (
        <>
            <div className='bg-img'>
                <div className='container d-block mx-auto w-75 my-3 p-3'>
                    <div className='container card' >
                        <h1>Title: {title}</h1>
                    <img src={image || process.env.PUBLIC_URL + '/img-not-found.png'} class="img-fluid mx-auto d-block" alt={image} />
                    <h2>Message: {message}</h2>
                    <h3>Details: {description}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewOne