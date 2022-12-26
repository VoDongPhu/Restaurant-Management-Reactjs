import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login/index";
import Register from "./views/Register/index";
//import Layout from './components/Layout/Layout';
import Home from "./views/Home";
import Contact from "./views/Contact";
import Hotel from "./views/Hotel";
import Booking from "./views/Booking";
import "../src/fontawasome.js";
import ListRoom from "./views/ListRoom";
import ListRestaurant from "./views/ListRestaurant";
import "./App.css";
import ChangePassword from "./views/ChangePassword";
import Admin from "./views/Admin";
import FoodManagement from "./views/Admin/FoodManagement";
import UserManagement from "./views/Admin/UserManagement";
import AddUser from "./views/Admin/UserManagement/AddUser";
import EditUser from "./views/Admin/UserManagement/EditUser";
import AddFood from "./views/Admin/FoodManagement/AddFood";
import EditFood from "./views/Admin/FoodManagement/EditFood";
import BookingManagement from "./views/Admin/BookingManagement";
import DetailBooking from "./views/Admin/BookingManagement/DetailBooking";
import TableManagement from "./views/Admin/TableManagement";
import AddTable from "./views/Admin/TableManagement/AddTable";
import EditTable from "./views/Admin/TableManagement/EditTable";
function App() {
    return ( 
        
        <Router>
            <Routes>
                     <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/hotel" element={<Hotel />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/changePassword" element={<ChangePassword />}/>
                    <Route path="/booking" element={<Booking />}/>
                    <Route path="/ListRoom" element={<ListRoom />}/>
                    <Route path="/ListRestaurant" element={<ListRestaurant />}/>
                    < Route path="/admin" element={<Admin />}>
                        <Route path="user" element={<UserManagement />} />
                        <Route path="user/add-user" element={<AddUser />} />
                        <Route path="user/edit-user/:id" element={<EditUser />} />
                        <Route path="food" element={<FoodManagement />} />
                        <Route path="food/add-food" element={<AddFood/>} />
                        <Route path="food/edit-food/:id" element={<EditFood />} />
                        <Route path="table" element={<TableManagement />} />
                        <Route path="table/add-table" element={<AddTable />} />
                        <Route path="table/edit-table/:id" element={<AddTable />} />
                        <Route path="booking" element={<BookingManagement />} />
                        <Route path="booking/detail-booking/:id" element={<DetailBooking />} />
                    </Route>
                  
            </Routes>
        </Router>

        // <
        // Router >
        // <
        // Routes >
        // <
        // Route path = "/"
        // element = { < Home / > }
        // /> <
        // Route path = "/contact"
        // element = { < Contact / > }
        // /> <
        // Route path = "/hotel"
        // element = { < Hotel / > }
        // /> <
        // Route path = "/register"
        // element = { < Register / > }
        // /> <
        // Route path = "/login"
        // element = { < Login / > }
        // /> <
        // Route path = "/changePassword"
        // element = { < ChangePassword / > }
        // /> <
        // Route path = "/booking"
        // element = { < Booking / > }
        // /> <
        // Route path = "/ListRoom"
        // element = { < ListRoom / > }
        // /> <
        // Route path = "/ListRestaurant"
        // element = { < ListRestaurant / > }
        // /> <
        // Route  path = "/admin"
        // element = { < Admin / > }
        // 
        // /> <
       
        // /Routes> <
        // /Router> 
        
    );
}

export default App;