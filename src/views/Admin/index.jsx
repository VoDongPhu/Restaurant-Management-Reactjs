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
import EditFood from "./FoodManagement/EditFood";
import BookingManagement from "./BookingManagement";
import DetailBooking from "./BookingManagement/DetailBooking";
import TableManagement from "./TableManagement"
import AddTable from "./TableManagement/AddTable";
import EditTable from "./TableManagement/EditTable";
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
            <Route path="food/edit-food/:id"  element = {<EditFood />} />
            <Route path="table"  element = {<TableManagement />} />
            <Route path="table/add-table"  element = {<AddTable />} />
            <Route path="table/edit-table/:id"  element = {<EditTable />} />
            <Route path="booking" element={<BookingManagement />} />
            <Route path="booking/detail-booking/:id" element={<DetailBooking />} />
          </Routes>
       </div>
   </div>
 )
}
export default Admin