import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { toast } from "react-toastify";
import axios from "axios";
import "./LoginPage.scss"
import { useTranslation } from "react-i18next";

const Login = () => {
  const {t} = useTranslation("global")
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const formDataHandler = (e, portotype) => {
    setLoginData({
      ...loginData,
      [portotype]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        loginData
      );
      if (res.data) {
        navigate("/");
        toast.success(`${t("toast.Welcome")}`);
      }
    } catch (error) {
      if (!error?.response) {
        toast.error(`${t('toast.server_msg')}`)
      }
      if (error.response?.status === 400) {
        toast.error(`${t('toast.notFound_msg')}`)
      }
      if (error.response?.status === 401) {
        console.log("unauthorized entered");
        toast.error("Unauthorized")
      }
      toast.error(`${t('toast.notFound_msg')}`)
    }
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login-content">
            <div className="section-title">
              <h3>Login Here!</h3>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Username */}
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

              {/* Password */}
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
              <button type="submit" className="form-btn font-rubik fw-4">
                Login
              </button>

              <Link to="/register">
                <Title title={"I Don't Have An Account"} />{" "}
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
