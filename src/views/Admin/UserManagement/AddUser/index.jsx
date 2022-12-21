import React , {useState} from "react";
import {useNavigate} from "react-router-dom"
import swal from "sweetalert";
import {createNewUser} from "../../../../api/userApi"
import "./styles.scss"
function AddUser(){
  let Navigate = useNavigate()
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: ""
  })
  const handleOnChange = (e)=> {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const res = await createNewUser(user);
    if(res){
      swal("Here's a message", "Create a new user successful");
      Navigate('/admin/user')
    }
   
  }
    return (
        <div className="user-container">
           <label>CREATE A NEW USER</label>
            <div className="add-user-container">
             
        <form>
          <label for="fname">FullName</label>
          <input type="text" id="fname" name="fullname" value={user.fullname} placeholder="Your full name.." onChange={e=>handleOnChange(e)} />
      
          <label for="lname">Email</label>
          <input type="text" id="lname" name="email" value={user.email} placeholder="Your email .." onChange={e=>handleOnChange(e)} />
          <label for="lname">Password</label>
          <input type="password" id="lname" name="password" value={user.password} placeholder="Your password.." onChange={e=>handleOnChange(e)}/>
        
         <button onClick={handleSubmit} >Submit</button>
        </form>
            </div>
       
      </div>
    )
}
export default AddUser