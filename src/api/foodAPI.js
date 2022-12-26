import axios from "axios";
const url = 'http://localhost:3030/food/'
export const createNewFood = async (data) => {
    try {
      const res = await axios.post(
        `${url}add-food`,data
      )
      if (res) {

       return true
      }
    } catch (error) {
      return false
    }
  }
export const deleteFood =  (foodID) => {
  return axios.delete(`${url}delete-food`,{data:{_id:foodID}})
}
export const updateFood = (data) => {
  return axios.put(`${url}edit-food/${data._id}`,data)
}
