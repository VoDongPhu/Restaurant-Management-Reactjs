import axios from "axios";
import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {deleteUser} from "../../../api/userApi"

import { useNavigate } from "react-router-dom";
import "./styles.scss"

function UserManagement() {
  let Navigate = useNavigate()
   const [arrUsers, setArrUsers] = useState([]);
  
  
   
  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/user/get-all-users"
      );
      if (res) {
        setArrUsers(res?.data?.data);
      }
    } catch (error) {}
  }
  if (arrUsers.length === 0) {
    return
  }
  const handleDelete = async (user) => {
    try{
      await deleteUser(user._id)
      getData()
    }catch(error) {
      console.log(error)
    }
  }
  const handleEdit =  (user) => {
    Navigate(`/admin/user/edit-user/${user._id}`)
   
  }
 return(
   <div className="user-container" >
    
    <div className="mx-1">
      <Link  className="btn btn-add-user px-3" to="/admin/user/add-user"><i class="fa-solid fa-plus"></i>Add new users</Link>
    </div>
       <div className='users-table mt-3 mx-1'>
            <table className='table'>
               <tr>
                  <th>fullName</th>
                  <th>Email</th>
                  <th>Actions</th>
               </tr>
               { arrUsers.map((item,index)=>{
                  return (
                     <>
                      <tr key={index}>
                        <td>{item.fullname}</td>
                        <td>{item.email}</td>
                        <td>
                          <button className="btn-edit" onClick={()=>handleEdit(item)}><i class="fa-solid fa-pencil "></i></button>
                          <button className="btn-delete" onClick={()=>handleDelete(item)}><i class="fa-solid fa-trash "></i></button>
                        </td>
                      </tr>       
                     </>
                     ) })}
            </table>
         </div>
       
   </div>
 )
}
export default UserManagement