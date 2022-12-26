import { getDefaultNormalizer } from "@testing-library/react"
import axios from "axios"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./styles.scss"

function BookingManagement() {
   let Navigate = useNavigate()
   const [arrBookings, setArrBookings] = useState([])
   useEffect(()=>{
      getData()
   },[])
   const getData = async () => {
      try {
         const res = await axios.get(
            "http://localhost:3030/booking/get-all-bookings"
         )
         if(res) {
            setArrBookings(res?.data?.data)
         }
      }
      catch (error) {}
   }

   const handelDetail = (booking)=>{
      Navigate(`/admin/booking/detail-booking/${booking._id}`)
   }
    return(
        <div className="booking-container" >
           <div className='users-table mt-3 mx-1'>
                <table className='table'>
                   <tr>
                      <th>Full name</th>
                      <th>Phone</th>
                      <th>Date arrival</th>
                      <th>Time arrival</th>
                      <th>Table type</th>
                      <th>Actions</th>
                   </tr>
                   {arrBookings.map((item,index)=>{
                     return (
                        <>
                          <tr key={index} >
                            <td>{item.fullname}</td>
                           <td>{item.phone}</td>
                           <td>{item.dateArrival.toString()}</td>
                           <td>{item.timeArrival}</td>
                           <td>{item.tabletype}</td>
                           <td>
                              <button className="btn-detail"  onClick={()=>handelDetail(item)}>Detail</button>
                           </td>
                        </tr>       
                        </>
                     )
                   })}
                  
                </table>
             </div>
       </div>
    )
}

export default BookingManagement