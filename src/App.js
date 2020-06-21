import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import mainpage from "./Components/mainpage";
import Contact from "./Components/Contact";
import Modal from "./Components/Modal";
import AdminPage from "./Components/AdminPage";
import BackCover from "./background";
import firebase from "../src/Components/Config/Fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <React.Fragment>
        <BackCover />
        <Navbar />
        <Switch>
          <Route exact path="/" component={mainpage} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/mainpage" component={mainpage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ProductList" component={ProductList} />
          <Route exact path="/admin" component={AdminPage} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;

{
  /* */
}
