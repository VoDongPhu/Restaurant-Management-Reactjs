import React from "react";
import MenuAdmin from "../../components/MenuAdmin";
import TopBar from "../../components/TopBar";
import "./styles.scss"
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodManagement from "./FoodManagement";
import UserManagement from "./UserManagement";
import AddUser from "./UserManagement/AddUser";
import EditUser from "./UserManagement/EditUser";
import AddFood from "./FoodManagement/AddFood";

function Admin() {
 
 return(
    <div className="container">
    < MenuAdmin />
       <div className="main1">
          < TopBar />
          <Routes>
            <Route path="user" element = {<UserManagement />} />
            <Route path="user/add-user"  element = {<AddUser />} />
            <Route path="user/edit-user/:id" element= {<EditUser />} />
            <Route path="food"  element = {<FoodManagement />} />
            <Route path="food/add-food"  element = {<AddFood />} />
          </Routes>
       </div>
   </div>
 )
}
export default Admin