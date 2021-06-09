import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";




const Photo = () => {
  const [photo, setPhoto] = useState({
    url: "",
    title: "",
    content: "",
    heading: "",
   
  });

  const loadPhoto = async () => {
    const res = await axios.get(`http://localhost:3003/photos/${id}`);
    setPhoto(res.data);
  };

  const { id } = useParams();
  useEffect(() => {
    loadPhoto();
  }, []);
  
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Photo Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">url: {photo.url}</li>
        <li className="list-group-item">title: {photo.title}</li>
        <li className="list-group-item">content: {photo.content}</li>
        <li className="list-group-item">heading: {photo.heading}</li>
      </ul>
    </div>
  );
};

export default Photo;
