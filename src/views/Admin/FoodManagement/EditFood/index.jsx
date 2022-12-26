import React, {useState,useEffect} from "react";
import axios from "axios";
import "./styles.scss"
import { useParams, useNavigate } from "react-router-dom";
import { updateFood } from "../../../../api/foodAPI";
import swal from "sweetalert";
function EditFood () {
    let Navigate = useNavigate()
    const params = useParams()
    const [foodEdit, setFoodEdit] = useState({
      name: "",
      price: "",
      image: ""
    });
    useEffect(() => {
        getData();
      },[]);
      const getData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3030/food/get-food/${params.id}`
          )
          if (res) {
            setFoodEdit(res?.data?.data)
            console.log(res.data)
          }
        } catch (error) {}
      }
    const handleOnChange = (e) => {
      setFoodEdit({...foodEdit,[e.target.name]:e.target.value})
    }
    const handleUpdate = async(e) => {
      e.preventDefault();
      const res = await updateFood(foodEdit);
      swal("Here's a message", "Update a new successful");
      Navigate('/admin/food')

    }
      
    return(
        <div >
             <div className="food-container">
           <label>UPDATE A FOOD</label>
            <div className="edit-food-container">
             
        <form>
          <label for="fname">Name</label>
          <input type="text" id="fname" value={foodEdit.name} name="name" onChange={e=>handleOnChange(e)}  />
      
          <label for="lname">Price</label>
          <input type="text" id="lname" value={foodEdit.price} name="price" onChange={e=>handleOnChange(e)}  />
          <label for="lname">Image</label>
          <img src={foodEdit.image}></img>
          <input type="file"  id="lname" name="image" onChange={e=>handleOnChange(e)} />
        
         <button onClick={handleUpdate}>Update</button>
        </form>
            </div>
       
      </div>
        </div>
    )
}
export default EditFood