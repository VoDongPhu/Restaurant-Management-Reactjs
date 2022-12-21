import React, {useState,useEffect} from "react";
import axios from "axios";
import "./styles.scss"
import { useParams, useNavigate } from "react-router-dom";
import {updateUser} from "../../../../api/userApi"
import swal from "sweetalert";
function EditUser () {
    let Navigate = useNavigate()
    const params = useParams()
    const [userEdit, setUserEdit] = useState({
      fullname: "",
      email: "",
      password: ""
    });
    useEffect(() => {
        getData();
      },[]);
      const getData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3030/user/get-user/${params.id}`
          )
          if (res) {
            setUserEdit(res?.data?.data)
            console.log(res.data)
          }
        } catch (error) {}
      }
    const handleOnChange = (e) => {
      setUserEdit({...userEdit,[e.target.name]:e.target.value})
    }
    const handleUpdate = async(e) => {
      e.preventDefault();
      const res = await updateUser(userEdit);
      swal("Here's a message", "Update a new successful");
      Navigate('/admin/user')

    }
      
    return(
        <div >
             <div className="user-container">
           <label>UPDATE A NEW USER</label>
            <div className="edit-user-container">
             
        <form>
          <label for="fname">FullName</label>
          <input type="text" id="fname" value={userEdit.fullname} name="fullname" placeholder="Your full name.." onChange={e=>handleOnChange(e)}  />
      
          <label for="lname">Email</label>
          <input type="text" id="lname" value={userEdit.email} name="email" placeholder="Your email .." onChange={e=>handleOnChange(e)}  />
          <label for="lname">Password</label>
          <input type="password" value={userEdit.password} id="lname" name="password" placeholder="Your password.." onChange={e=>handleOnChange(e)} />
        
         <button onClick={handleUpdate}>Update</button>
        </form>
            </div>
       
      </div>
        </div>
    )
}
export default EditUser