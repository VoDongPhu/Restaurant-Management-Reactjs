import React , {useState} from "react";
import {useNavigate} from "react-router-dom"
import swal from "sweetalert";
import {createNewFood} from "../../../../api/foodAPI"
import "./styles.scss"
function AddFood() {
    let Navigate = useNavigate()
    const [food, setFood] = useState({
        name: "",
        price: "",
        image: ""
      })
    const handleOnChange = (e)=> {
        setFood({...food,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
    
        e.preventDefault();
        const res = await createNewFood(food);
        if(res){
          swal("Here's a message", "Create a new food successful");
          Navigate('/admin/food')
        }
       
    }
    console.log(food)
    return (
        <div className="food-container">
        <label>CREATE A NEW FOOD</label>
         <div className="add-food-container">
          
     <form>
       <label for="fname">Name</label>
       <input type="text" id="fname" name="name" value={food.name}  placeholder="Food name.." onChange={e=>handleOnChange(e)} />
   
       <label for="lname">Price</label>
       <input type="text" id="lname" name="price" value={food.price}  placeholder="Food price .." onChange={e=>handleOnChange(e)}  />
       <label for="lname">Image</label>
       <input type="file" id="lname" name="image" value={food.image}  placeholder="Food image" onChange={e=>handleOnChange(e)} />
     
      <button onClick={handleSubmit}  >Submit</button>
     </form>
         </div>
    
   </div>
    )

}
export default AddFood