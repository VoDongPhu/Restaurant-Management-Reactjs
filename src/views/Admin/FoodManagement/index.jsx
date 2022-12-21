import React from "react";
import "./styles.scss"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import {deleteFood} from "../../../api/foodAPI"

function FoodManagement() {
  const [arrFoods, setArrFoods] = useState([]);
  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/food"
      );
      if (res) {
        setArrFoods(res?.data?.data);
      }
    } catch (error) {}
  }
  const handleDelete = async (food) => {
    try{
      await deleteFood(food._id)
      getData()
    }catch(error) {
      console.log(error)
    }
  }
 return(
  <div>
   <div className="food-container" >
    
    <div className="mx-1">
      <Link  className="btn btn-add-food px-3" to="/admin/food/add-food"><i class="fa-solid fa-plus"></i>Add new food</Link>
    </div>
       <div className='users-table mt-3 mx-1'>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
              { arrFoods.map((item,index)=>{
                  return (
                     <>
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><img  className="image-food" src={item.image}></img></td>
                        <td>
                          <button className="btn-edit"><i class="fa-solid fa-pencil "></i></button>
                          <button className="btn-delete" onClick={()=>handleDelete(item)}><i class="fa-solid fa-trash "></i></button>
                        </td>
                      </tr>       
                     </>
                     ) })}
            </table>
         </div>
       
   </div>
  </div>
)

}
export default FoodManagement