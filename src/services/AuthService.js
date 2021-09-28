// Authentication service
import axios from "axios";

const API_URL = "https://twetterclone.herokuapp.com/auth/"; 


export const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.config.data));
      return res;
    });
};


export const register = (username, email, password) => {
  return axios
    .put(API_URL + "signup", {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    });
};


// export const logout = () => {
//   localStorage.removeItem("user"); 
//   history.push("/login")
//   // window.location = "/login";
// } 


export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
