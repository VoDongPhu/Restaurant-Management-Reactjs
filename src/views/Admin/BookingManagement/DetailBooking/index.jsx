import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./styles.scss"
function DetailBooking() {
    const params = useParams()
    const [booking, setBooking] = useState([])
    useEffect(() => {
        getData();
      },[]);
      const getData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3030/booking/get-booking/${params.id}`
          );
          if (res) {
            setBooking(res?.data?.data);
          }
        } catch (error) {

        }
      }
    return (
        <div className="booking-detail-container">
            <h1 className="title"> BOOKING DETAIL</h1>
            <div className="booking-form">
                <div className="form-group">
                <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={booking.fullname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="form-control"
                    value={booking.phone}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="form-control"
                    value={booking.emailBook}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tabletype">Table Type</label>
                  <input
                    id="tabletype"
                    name="tabletype"
                    type="text"
                    className="form-control"
                    value={booking.tabletype}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Date Arrival</label>
                  <input
                    id=""
                    name=""
                    type="text"
                    className="form-control"
                    value={booking.dateArrival}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Time Arrival</label>
                  <input
                    id=""
                    name=""
                    type="text"
                    className="form-control"
                    value={booking.timeArrival}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Adults</label>
                  <input
                    id=""
                    name=""
                    type="text"
                    className="form-control"
                    value={booking.adults}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Children</label>
                  <input
                    id=""
                    name=""
                    type="text"
                    className="form-control"
                    value={booking.children}
                  />
                </div>
                <div className="form-group comment">
                  <label htmlFor="">Customer's Comment</label>
                  <form action="">
                    <textarea name="" id="" cols="30" rows="10" value={booking.comment}
                    >
                    </textarea>
                  </form>
                </div>
                <h2>The Foods Order:</h2>
                <div className="form-group foodOrder"> 
                   {(booking.foodID)?.map((item,index)=>{
                    return (
                        <>
                          <div className="food-order" key={index}>
                            <div className="food-name">{item.name}</div>
                            <div className="image"><img src={item.image}></img></div>
                        </div>
                        </>
                    )
                   })}
                </div>
            </div>
        </div>
    )
}
export default DetailBooking