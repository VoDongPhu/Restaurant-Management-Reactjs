import axios from "axios"
const url = 'http://localhost:3030/booking'


 export const bookingApi = async (data) =>{
    try {
        const res = await axios.post(`${url}`,data)
        if(res){
            return true
        }
    } catch (error) {
       return false
    }
}