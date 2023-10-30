import React, { useState, useContext, useEffect } from "react";
import "./RegisterPage.scss";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import axios from "axios";
import Title from "../../components/Title/Title";

const RegisterPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const formDataHandler = (event, property) => {
    setLoginData({
      ...loginData,
      [property]: event.target.value,
    });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register",loginData);
      if(response.data){
        navigate("/login")
        console.log(response)
      }else{
        toast.error("Somthing Went Wrong!")
      }

      setLoginData({
        ...loginData,
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      setSuccess(true);
      console.log(success);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No server response");
      }
      if (err.response?.status === 400) {
        setErrorMsg("Missing username or password");
      }
      if (err.response?.status === 401) {
        console.log("unauthorized entered");
        setErrorMsg("Unauthorized");
      }
      console.log(errorMsg);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login-content">
          <div className="section-title">
            <h3>Register Here!</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-elem">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                onChange={(e) => formDataHandler(e, "username")}
                value={loginData.username}
                required
              />
            </div>

            <div className="form-elem">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => formDataHandler(e, "email")}
                value={loginData.email}
                required
              />
            </div>

            <div className="form-elem">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => formDataHandler(e, "phone")}
                value={loginData.phone}
                required
              />
            </div>

            <div className="form-elem">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => formDataHandler(e, "password")}
                value={loginData.password}
                required
              />
            </div>
            <button type="submit" className=" font-rubik fw-4">Register</button>
            
            <Link to='/login'><Title title={"Aleady Have An Account"} />  </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
