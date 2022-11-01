import axios from "axios";


const url = 'http://localhost:3030/auth/'

 export const registerApi = async (data) =>{
     try {
         const res = await axios.post(`${url}register`,data)
         if(res){
             return true
         }
     } catch (error) {
        return false
     }
 }
