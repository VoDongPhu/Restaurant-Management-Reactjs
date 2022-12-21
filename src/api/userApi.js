import axios from "axios";
const url = 'http://localhost:3030/user/'
export const createNewUser = async (data) => {
    try {
      const res = await axios.post(
        `${url}add-user`,data
      )
      if (res) {

       return true
      }
    } catch (error) {
      return false
    }
  }
export const deleteUser =  (userID) => {
  return axios.delete(`${url}delete-user`,{data:{_id:userID}})
}
export const updateUser = (data) => {
  return axios.put(`${url}edit-user/${data._id}`,data)
}
