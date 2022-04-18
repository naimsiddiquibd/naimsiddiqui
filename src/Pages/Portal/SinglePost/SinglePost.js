import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const SinglePost = () => {
  const { user, logout } = useAuth();
  const { displayName, email } = user;

  const [postInfo, setPostInfo] = useState({});
  const [postSuccess, setPostSuccess] = useState(false);

  const [article, setArticle] = useState([]);

  const [savedUsers, setSavedUser] = useState([]);

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
    const { PostId } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://lit-garden-79524.herokuapp.com/AllPosts/${PostId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    })
    return (
        <div>
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
                            Your account hass been successfully created!
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
        <Navigation></Navigation>
        <section id="about" className="about">
      <div className="container">



        <div className="row">
          
          <div className="col-lg-12 pt-4 pt-lg-0 content">
          <img className="img-fluid mb-5" src={`data:image/jpeg;base64,${post.image}`} alt=""/>
            <h3>{post.title}</h3>
            <p>
              {post.textarea}
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
    );
};

export default SinglePost;