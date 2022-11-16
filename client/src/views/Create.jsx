import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [chatters, setChatter] = useState([])
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const formHandler = () => {
        const newMessage = {
            message,
            image,
            title,
            description
        }
        newChatterApi(newMessage)
        setMessage("")
        setImage("")
        setDescription("")
        setTitle("")
    }

    const newChatterApi = (chatter) => {
        axios.post("http://localhost:9001/api/chatter/create", chatter)
            .then(res => {
                console.log(res)
                addMessageToChatter(res.newChatter)
                navigate('/chatter')
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.message)
            })
    }

    const addMessageToChatter = (chatter) => {
        setChatter([...chatters, chatter]);
    }

    useEffect(() => {
        axios.get("http://localhost:9001/api/chatter")
            .then(res => {
                console.log(res.data);
                setChatter(res.data);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <p style={{ "color": "red" }}>{errors}</p>
                <div className="card border">
                    <div class="card-body">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className='form-label'>Image Title</label>
                                <input className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className='form-label'>Add Image Url</label>
                                <input className="form-control" value={image} onChange={e => setImage(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className='form-label'>Message</label>
                                <textarea className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className='form-label'>Description</label>
                                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={formHandler}>Send Message</button>
                            <Link className="btn btn-danger" to={'/chatter'}>Cancle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create