import React, { useState, useEffect } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './Portal.css';


const Portal = () => {

    const { user, logout } = useAuth();
    const { displayName, email } = user;

    const [postInfo, setPostInfo] = useState({});
    const [postSuccess, setPostSuccess] = useState(false);

    const [article, setArticle] = useState([]);

    const [savedUsers, setSavedUser] = useState([]);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch(`https://lit-garden-79524.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])

    useEffect(() => {
        fetch(`https://lit-garden-79524.herokuapp.com/users/${email}`)
            .then(res => res.json())
            .then(data => setSavedUser(data))
    }, [])

    useEffect(()=>{
        const url = `https://lit-garden-79524.herokuapp.com/AllPosts`
        fetch(url)
        .then(res => res.json())
        .then(data => setArticle(data));
    }, [])

    const [title, setTitle] = useState('');
    const [textarea, setTextarea] = useState('');
    const [image, setImage] = useState(null);

    const handlePostSubmit = e => {
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('textarea', textarea);
        formData.append('image', image);
        formData.append('displayName', displayName);
        formData.append('email', email);

        // collect data
        const postData = {
            formData,
            displayName,
            email,
        }

        // send to the server
        fetch('https://lit-garden-79524.herokuapp.com/posts', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPostSuccess(true);
                }
            });

        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>


            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand d-flex" href="#">
                <h5 className="ms-3">Portal</h5>
            </a>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto align-items-center mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                     <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                     
                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add New</button>
                     <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                    
                        <form className="m-5" onSubmit={handlePostSubmit}>
                        <h4>Create a new post</h4>
                        {postSuccess && <div class="alert alert-success" role="alert">
                        Your article hass been successfully posted!
                        </div>}
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Please put the title first</label>
                            <input onChange={e => setTitle(e.target.value)} class="form-control form-control-lg" type="text" placeholder="Usefulness to being a backbencher"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Now write whatever you want</label>
                            <textarea onChange={e => setTextarea(e.target.value)} class="form-control" id="exampleFormControlTextarea1" placeholder="Now I am going you share the story" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Upload Picture</label>
                        <input onChange={e => setImage(e.target.files[0])} class="form-control" type="file" id="formFile"/>
                        </div>
                        <button type="submit" class="btn btn-primary mr-2">Submit post</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </form>
                        </div>
                    </div>
                    </div>
                    </li>
                    
                        
                    <li className="nav-item">
                    <div className="dropdown">
                    <button className="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.displayName}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a onClick={logout} className="dropdown-item" href="#">Logout</a>
    
                    </div>
                    </div>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={`data:image/jpeg;base64,${savedUsers.image}`}  class="img-size" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <main className="container">
        
        <section className="bg-white p-4 rounded my-4">
            
            <div className="pb-5 mb-5 border-bottom">
                <h3 className="text-primary mb-5">Newly Joined</h3>
                <div className="row gy-4">
                    



                    {allUsers.map((row) => (<div className="col-md-4 col-sm-6 d-flex align-items-center">
                        <img className=" rounded-circle border border-primary" width="50" src={`data:image/jpeg;base64,${row.image}`} alt="John Smith"/>
                        <h5 className="ms-3">{row.name}</h5>
                    </div>))}

                    






                </div>
            </div>
          
            <div>
                <h3 className="text-primary mb-4">Latest Articles</h3>
                <div className="row">
                    

                    {article.map((row) => (
                        <article key={row._id} className="col-lg-6 row gy-3 gx-0 gx-sm-3">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={`data:image/jpeg;base64,${row.image}`} alt=""/>
                        </div>
                        <div className="col-sm-6">
                            <h4>{row.title}</h4>
                            <p className="text-secondary mt-3">By <a className="text-decoration-none" href="#">{row.displayName}</a>
                            </p>
                            <Link key={row._id} to={`/SinglePost/${row._id}`}><button type="button" class="btn btn-primary btn-sm mr-2">Open Post</button></Link>
                        </div>
                    </article>
                    ))}



                  
                </div>
            </div>
           
        </section>
       
        <section className="bg-white rounded p-4 mb-5">
            <h3 className="text-primary mb-4">Exclusive Softwares</h3>
            <div className="row g-4">
            
                <div className="col-md-6 col-lg-4">
                    <div className="shadow-sm rounded p-3">
                        <img className="img-fluid" src="images/course-1.png" alt=""/>
                        <div className="my-3">
                            <h4>The Complete JavaScript Course 2021</h4>
                            <a href="#" className="text-danger text-decoration-none">Reed Krakoff</a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                                <p className="ms-2 text-secondary">4.5</p>
                            </div>
                            <div className="badge rounded-pill bg-light text-danger py-2">
                                <i className="far fa-clock"></i>
                                <span>01:30 hr</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4">
                    <div className="shadow-sm rounded p-3">
                        <img className="img-fluid" src="images/course-2.png" alt=""/>
                        <div className="my-3">
                            <h4>The Complete JavaScript Course 2021</h4>
                            <a href="#" className="text-danger text-decoration-none">Reed Krakoff</a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                                <p className="ms-2 text-secondary">4.5</p>
                            </div>
                            <div className="badge rounded-pill bg-light text-danger py-2">
                                <i className="far fa-clock"></i>
                                <span>01:30 hr</span>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-4">
                    <div className="shadow-sm rounded p-3">
                        <img className="img-fluid" src="images/course-3.png" alt=""/>
                        <div className="my-3">
                            <h4>The Complete JavaScript Course 2021</h4>
                            <a href="#" className="text-danger text-decoration-none">Reed Krakoff</a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                                <p className="ms-2 text-secondary">4.5</p>
                            </div>
                            <div className="badge rounded-pill bg-light text-danger py-2">
                                <i className="far fa-clock"></i>
                                <span>01:30 hr</span>
                            </div>
                        </div>
                    </div>
                </div>
              

            </div>
        </section>
    

    </main>
  




        </div>
    );
};

export default Portal;