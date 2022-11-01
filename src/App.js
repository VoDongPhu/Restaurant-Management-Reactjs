import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login/index";
import Register from "./views/Register/index";
//import Layout from './components/Layout/Layout';
import Home from "./views/Home/Home";
import Contact from "./views/Contact";
import Hotel from "./views/Hotel";
import Booking from "./views/Booking";
import "../src/fontawasome.js";
import ListRoom from "./views/ListRoom";
import ListRestaurant from "./views/ListRestaurant";
import "./App.css";
import ChangePassword from "./views/ChangePassword";

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/hotel"
        element = { < Hotel / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/changePassword"
        element = { < ChangePassword / > }
        /> <
        Route path = "/booking"
        element = { < Booking / > }
        /> <
        Route path = "/ListRoom"
        element = { < ListRoom / > }
        /> <
        Route path = "/ListRestaurant"
        element = { < ListRestaurant / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;