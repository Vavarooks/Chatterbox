import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Create from './views/Create';
import NotFound from './views/NotFound';
import ViewOne from './views/ViewOne';
import EditOne from './views/Edit';
import ViewAll from './views/ViewAll';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">Chatter Box <i className="fa-solid fa-message-smile"></i></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/chatter`}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/chatter' element={<ViewAll />}/>
        <Route path='/chatter/add' element={<Create/>}/>
        <Route path='/chatter/create' element={<Create/>}/>
        <Route path='/chatter/:id' element={<ViewOne />}/>
        <Route path='/chatter/update/:id' element={<EditOne/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
