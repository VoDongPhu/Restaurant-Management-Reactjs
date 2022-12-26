import React, {useState,useEffect} from "react";
import axios from "axios";
import "./styles.scss"
import { useParams, useNavigate } from "react-router-dom";
import { updateTable } from "../../../../api/tableAPI";
import swal from "sweetalert";
function EditTable () {
    let Navigate = useNavigate()
    const params = useParams()
    const [tableEdit, setTableEdit] = useState({
      name: "",
      type:"",
      price: "",
      image: "",
      description:""
    });
    useEffect(() => {
        getData();
      },[]);
      const getData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3030/tableType/get-table/${params.id}`
          )
          if (res) {
            setTableEdit(res?.data?.data)
            console.log(res.data)
          }
        } catch (error) {}
      }
    const handleOnChange = (e) => {
      setTableEdit({...tableEdit,[e.target.name]:e.target.value})
    }
    const handleUpdate = async(e) => {
      e.preventDefault();
      const res = await updateTable(tableEdit);
      swal("Here's a message", "Update a new successful");
      Navigate('/admin/table')

    }
      
    return(
        <div >
             <div className="table-container">
           <label>UPDATE A TABLE</label>
            <div className="edit-table-container">
             
        <form>
          <label for="fname">Name</label>
          <input type="text" id="fname" value={tableEdit.name} name="name" onChange={e=>handleOnChange(e)}  />
          <label for="fname">Type</label>
          <input type="text" id="fname" value={tableEdit.type} name="type" onChange={e=>handleOnChange(e)}  />
      
          <label for="lname">Price</label>
          <input type="text" id="lname" value={tableEdit.price} name="price" onChange={e=>handleOnChange(e)}  />
          
          <label for="lname">Description</label>
          <input type="text" id="lname" value={tableEdit.description} name="description" onChange={e=>handleOnChange(e)}  />
          <label for="lname">Image</label>
          <img src={tableEdit.image}></img>
          <input type="file"  id="lname" name="image" onChange={e=>handleOnChange(e)} />
        
         <button onClick={handleUpdate}>Update</button>
        </form>
            </div>
       
      </div>
        </div>
    )
}
export default EditTable