import axios from "axios";
const url = "http://localhost:3030/auth/";

export const loginApi = async (data) => {
  try {
    const res = await axios.post(`${url}login`, data);
    if (res) {
      localStorage.setItem("idUser", res?.data?.user?._id);
      localStorage.setItem("fullname", res?.data?.user?.fullname);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("statusLogin", true);
      //note

      return true;
    }
  } catch (error) {
    return false;
  }
};
