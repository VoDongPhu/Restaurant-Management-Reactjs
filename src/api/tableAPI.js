import axios from "axios";
const url = 'http://localhost:3030/tableType/'
export const createNewUTable = async (data) => {
    try {
      const res = await axios.post(
        `${url}upload`,data
      )
      if (res) {

       return true
      }
    } catch (error) {
      return false
    }
  }



export const deleteTable =  (tableID) => {
    return axios.delete(`${url}delete-table`,{data:{_id:tableID}})
  }
  export const updateTable = (data) => {
    return axios.put(`${url}edit-table/${data._id}`,data)
  }
  