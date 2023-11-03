import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./LoginPage.scss";
import { useTranslation } from "react-i18next";
import { authActions } from "../../slice/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const { t } = useTranslation("global");

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(authActions.login());

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
        toast.error(`${t("toast.server_msg")}`);
      }
      if (error.response?.status === 400) {
        toast.error(`${t("toast.notFound_msg")}`);
      }
      if (error.response?.status === 401) {
        console.log("unauthorized entered");
        toast.error("Unauthorized");
      }
      toast.error(`${t("toast.notFound_msg")}`);
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
                <label htmlFor="username">{t('Login_Page.Username')}:</label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => formDataHandler(e, "username")}
                  value={loginData.username}
                  required
                  style={{ backgroundColor : '#eee' }}
                />
              </div>

              {/* Password */}
              <div className="form-elem" style={{ marginTop : '15px' }}>
                <label htmlFor="password">{t('Login_Page.Password')}:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => formDataHandler(e, "password")}
                  value={loginData.password}
                  required
                  style={{ backgroundColor : '#eee' }}
                />
              </div>
              <button type="submit" className="form-btn font-rubik fw-4">
                {t('Login_Page.Login_btn')}
              </button>

              <Link to="/register" className="link">
                <Title title={t('Login_Page.title')} />
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
