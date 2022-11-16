import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navigate, useNavigate, useParams, Link} from 'react-router-dom';

const Edit = (props) =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");

    const [chatter, setChatter] = useState({
        _id: "",
        message: "",
        image: ""
    })
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")

    const editHandler = () => {
        const updatedChatter = {
            message,
            image
        }
        editOneChatterApi(updatedChatter);
        // console.log(updatedChatter);
    }

    const editOneChatterApi = (chatter) => {
        axios.put(`http://localhost:9001/api/chatter/update/${id}`, chatter)
            .then(res =>{
                console.log(res)
                navigate('/chatter')
            })
            .catch(err =>{
                console.log(err)
                setErrors( err.response.data.message)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:9001/api/chatter/${id}`)
            .then(res =>{
                console.log(res)
                setChatter(res.data.oneMessageById);
                setMessage(res.data.message)
                setImage(res.data.image)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    return (
        <>
            <h1>Edit</h1>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <p style={{"color": "red"}}>{errors}</p>
                <div className="card border">
                    <div class="card-body">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className='form-label'>Add Image Url</label>
                                <input className="form-control" value={image} onChange={e => setImage(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <textarea className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={editHandler}>Edit Message</button>
                            <Link className="btn btn-danger" to={'/chatter'}>Cancle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit