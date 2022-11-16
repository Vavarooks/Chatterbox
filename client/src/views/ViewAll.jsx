import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAll = () => {
    const [chatters, setChatter] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deleteChatter = (id) => {
        axios.delete(`http://localhost:9001/api/chatter/${id}`)
            .then(res => {
                console.log(res);

                setChatter(chatters.filter((chatter) => chatter._id !== id))
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get("http://localhost:9001/api/chatter")
            .then(res => {
                console.log(res.data);
                setChatter(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
            <Link className="btn btn-secondary" to={'/chatter/add'}>Add New Post</Link>
                <div className="row row-cols-2">
                    <div className="col-sm-8">
                        {loaded && chatters.map((chatter, key) =>
                            <div key={key}>
                                <div className="card">
                                    <div className="card-body">
                                    <img src={process.env.PUBLIC_URL + '/img-not-found.png'} class="img-fluid mx-auto d-block" alt={chatter.image} />
                                        <h3 className="card-title">Chatter: <Link to={`/chatter/${chatter._id}`}>{chatter.message}</Link></h3>
                                        <Link className='btn btn-warning' to={`/chatter/update/${chatter._id}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={() => deleteChatter(chatter._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAll