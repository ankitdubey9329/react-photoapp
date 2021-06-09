import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    const result = await axios.get("http://localhost:3003/photos");
    setPhoto(result.data.reverse());
  };

  const deletePhoto= async id => {
    await axios.delete(`http://localhost:3003/photos/${id}`);
    loadPhotos();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Url</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Heading</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {photo.map((photo, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{photo.url}</td>
                <td>{photo.title}</td>
                <td>{photo.content}</td>
                <td>{photo.heading}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/photos/${photo.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/photos/edit/${photo.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePhoto(photo.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
