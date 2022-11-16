import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Comment = () => {


    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    
    const [comments, setComments] = useState({
        _id: "",
        comment: ""
    })
    
    const [comment, setComment] = useState("")
    
    const formHandler = () => {
        const newComment = {
            comment,
        }
        commentOneChatterApi(newComment)
    }


    const commentOneChatterApi = (comment) => {
        axios.put(`http://localhost:9001/api/chatter/update/${id}`, comment)
            .then(res => {
                console.log(res)
                navigate('/chatter')
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.message)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:9001/api/chatter")
            .then(res => {
                console.log(res.data);
                setComments(res.data);
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
                                <label className='form-label'>Message</label>
                                <textarea className="form-control" value={comment} onChange={e => setComment(e.target.value)}></textarea>
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

export default Comment