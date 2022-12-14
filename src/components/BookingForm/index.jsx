import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { bookingApi } from "../../api/bookingApi";
import swal from "sweetalert";
BookingForm.propTypes = {};

function BookingForm(props) {
  let Navigate = useNavigate()
  const [book, setBook] = useState({
    //idUserBooking: localStorage.getItem('idUser'),
    fullname:'',
    emailBook:'',
    phone:'',
    Tabletype:'',
    dateArrival : '',
    dateDeparture : '',
    adults :'',
    children :'',
    comment :'',
  })
  const bookingOnline = async() =>{
    // try {
    //   const res = await bookingApi(book)
    //   if(res === true){
    //     console.log(res)
    //     return swal("Here's a message!", "Success")
    //   }
    // } catch (error) {
    //   return swal("Here's a message!", "Something wrong")
      
    // }
    swal("Here's a message!", "Please choose food!")
    Navigate('/booking-food')
  }
  return (
    <div>
      <div className="booking-page">
        {/* header-booking-form */}
        <div className="header-booking-form">
          <img
            src="https://img.lovepik.com/photo/20211118/medium/lovepik-gourmet-background-picture_400152283.jpg"
            alt=""
          />
          <div className="content">
            <h1>Booking Form</h1>
            <div className="sub-title">
              <span>
                <a href="/">Home</a>
              </span>
              <span>/</span>
              <span>Booking Table Form</span>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="body-booking-page container">
            <div className="left-page">
              <h1 className="title">BOOK ONLINE</h1>
              <div className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    onChange={(e) => setBook({...book,fullname: e.target.value})}
                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your Email Address"
                    className="form-control"
                    onChange={(e) => setBook({...book,emailBook: e.target.value})}

                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    className="form-control"
                    onChange={(e) => setBook({...book,phone: e.target.value})}

                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="">Table Type</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                    onChange={(e) => setBook({...book,roomtype: e.target.value})}

                  >
                    <option selected disabled>
                      Table type
                    </option>
                    <option value="Single">Vip Table</option>
                    <option value="Double">Couple Table</option>
                    <option value="Deluxe">Universal Table</option>
                  </select>
                </div>

                <div className="form-group date date-arrival">
                  <label htmlFor="">Date Arrival</label>
                  <input
                    id="email"
                    name="email"
                    type="date"
                    placeholder="Date Arrival"
                    className="form-control"
                    onChange={(e) => setBook({...book,dateArrival: e.target.value})}

                  />
                </div>
                <div className="form-group date date-departure">
                  <label htmlFor="">Time Arrival</label>
                  <input
                    id="email"
                    name="email"
                    type="time"
                    placeholder=""
                    className="form-control"
                    onChange={(e) => setBook({...book,timeArrival: e.target.value})}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Adults</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                    onChange={(e) => setBook({...book,adults: e.target.value})}

                  >
                    <option selected disabled>
                      Adults
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="">Children</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                    onChange={(e) => setBook({...book,children: e.target.value})}

                  >
                    <option selected disabled>
                      Children
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group comment">
                  <label htmlFor="">Your Comment</label>
                  <form action="">
                    <textarea name="" id="" cols="30" rows="10" 
                    placeholder="Your Message..."
                    onChange={(e) => setBook({...book,comment: e.target.value})}
                    
                    >
                    
                    </textarea>
                  </form>
                  <div className="btn-book" onClick={()=> bookingOnline()}>
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-page">
              <div className="special-offer">
                <h1 className="title">SPECIAL OFFERS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
