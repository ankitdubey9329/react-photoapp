import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";

import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddPhoto from "./components/photos/AddPhoto";
import EditPhoto from "./components/photos/EditPhoto";
import Photo from "./components/photos/Photo";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
         
          <Route exact path="/photos/add" component={AddPhoto} />
          <Route exact path="/photos/edit/:id" component={EditPhoto} />
          <Route exact path="/photos/:id" component={Photo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
