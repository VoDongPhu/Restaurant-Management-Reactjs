import React , {useState} from "react";
import {useNavigate} from "react-router-dom"
import swal from "sweetalert";
import { createNewUTable } from "../../../../api/tableAPI";
import "./styles.scss"
function AddTable(){
  let Navigate = useNavigate()
  const [table, setTable] = useState({
    type: "",
    name: "",
    price: "",
    image:"",
    description: ""
  })
  const handleOnChange = (e)=> {
    setTable({...table,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const res = await createNewUTable(table);
    if(res){
      swal("Here's a message", "Create a new table successful");
      Navigate('/admin/table')
    }
   
  }
    return (
        <div className="table-container">
           <label>CREATE A NEW TABLE</label>
            <div className="add-table-container">
             
        <form>
          <label for="fname">Name</label>
          <input type="text" id="fname" name="name" value={table.name} placeholder="Table's name.." onChange={e=>handleOnChange(e)} />
      
          <label for="lname">Type</label>
          <input type="text" id="lname" name="type" value={table.type} placeholder="Type .." onChange={e=>handleOnChange(e)} />
          <label for="lname">Price</label>
          <input type="text" id="lname" name="price" value={table.price} placeholder="Table's price.." onChange={e=>handleOnChange(e)}/>
          <label for="lname">Description</label>
          <input type="text" id="lname" name="description" value={table.description} placeholder="Table's description.." onChange={e=>handleOnChange(e)}/>
          <label for="lname">Image</label>
          <input type="file" id="lname" name="image" value={table.image} placeholder="Table's description.." onChange={e=>handleOnChange(e)}/>
        
         <button onClick={handleSubmit} >Submit</button>
        </form>
            </div>
       
      </div>
    )
}
export default AddTable