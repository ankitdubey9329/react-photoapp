import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [photo, setPhoto] = useState({
    url: "",
    title: "",
    content: "",
    heading: "",
   
  });

  const { url,title,content,heading } = photo;
  const onInputChange = e => {
    setPhoto({ ...photo, [e.target.name]: e.target.value });
  };
  const loadPhotos = async () => {
    const result = await axios.get(`http://localhost:3003/photos/${id}`);
    setPhoto(result.data);
  };
  useEffect(() => {
    loadPhotos();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/photos/${id}`,photo);
    history.push("/");
  };

  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Photo</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Photo link"
              name="url"
              value={url}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
      
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your heading"
              name="heading"
              value={heading}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Photo</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
