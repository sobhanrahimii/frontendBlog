import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { GiPapers } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import search_icon from "../../assets/images/search_icon.png";
import { useSidebarContext } from "../../context/sidebarContext";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Blog_Create from "../Create/Blog_Create";
import { useSelector } from "react-redux";
import Login from "../../pages/Login/Login";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const desktopMobile = useMediaQuery({
    query: "(max-width:1300px)",
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
    desktopMobile();
  }, []);

  const { t, i18n } = useTranslation("global");
  const handleLangle = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { openSidebar } = useSidebarContext();
  return (
    <nav
      className={`navbar bg-purple flex align-center ${header ? "fixed" : ""}`}
    >
      <button className="lange-btn" onClick={() => handleLangle("fa")}>
        Fa
      </button>
      <button className="lange-btn" onClick={() => handleLangle("en")}>
        En
      </button>
      <div className="container w-100">
        <div className="navbar-content flex align-center justify-between">
          <div className="brand-and-toggler">
            <Link
              to="/"
              className="navbar-brand text-white flex align-center fs-26"
            >
              <span className="navbar-brand-icon">
                <GiPapers />
              </span>
              <span className="navbar-brand-txt font-rubik fw-5">Blog.</span>
            </Link>
          </div>
          <div className="navbar-row flex align-center">
            <ul className="navbar-nav flex align-center font-rubik">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white fw-4 fs-19">
                  {t("nav.Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link text-white fw-4 fs-19">
                  {t("nav.Blogs")}
                </Link>
              </li>
              <li className="nav-item">
                <div className="auth">
                  <Link to="/login" className="nav-link text-white fw-4 fs-19">
                    {t("nav.Login")} |
                  </Link>

                  <Link
                    to="/register"
                    className="nav-link text-white fw-4 fs-19"
                  >
                    {t("nav.Register")}
                  </Link>
                </div>
              </li>
            </ul>
            <div className="vertical-line"></div>

            <div className="navbar-btns flex align-center">
              {isLoggedIn ? (
                
                  <Link to="/create-blog">
                    <button className="sidebar-show-btn bg-white flex align-center justify-center">create Blog</button>
                  </Link>
                
              ) : (
                <button>
                  <Link to="/login">
                  <button className="sidebar-show-btn bg-white flex align-center justify-center">create Blog</button>
                  </Link>
                </button>
              )}
              <button
                type="button"
                className="sidebar-show-btn bg-white flex align-center justify-center"
                onClick={() => openSidebar()}
              >
                <FaBars size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
