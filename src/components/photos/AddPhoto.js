import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddPhoto = () => {
  let history = useHistory();
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/photos", photo);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Photo</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Photo"
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
              placeholder="Enter Your content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your heading Name"
              name="heading"
              value={heading}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Photo</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
