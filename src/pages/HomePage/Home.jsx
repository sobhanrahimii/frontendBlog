import React, { useState } from "react";
import "./Home.scss";
import search_icon from "../../assets/images/search_icon.png";
import banner_image from "../../assets/images/banner_image.png";
import Title from "../../components/Title/Title";
import { useBlogsContext } from "../../context/blogsContext";
import BlogsList from "../../components/Blogs/BlogsList";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // translation
  const { t } = useTranslation("global");
  // Error state
  const [erroMsg, setErrorMsg] = useState("");
  // Blog Context
  const { blogs, searchTerms, setSearchTerm, fetchBlogsFromSearch } =
    useBlogsContext();

  // Search items
  const handleSearchResult = (e) => {
    e.preventDefault();
    console.log(searchTerms);
    fetchBlogsFromSearch(searchTerms);
  };

  // handle by search
  const handleSearchTerm = (e) => {
    e.preventDefault();

    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
    }
  };
  console.log(blogs);
  return (
    <div className="main-holder bg-light-blue">
      <header
        className="header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <div className="header-content text-center flex align-center justify-center flex-column text-white">
            <h1 className="text-uppercase header-title ls-2">
              {t("home_page.banner_text")}
            </h1>
            <form
              className="flex align-center justify-center"
              onSubmit={(e) => handleSearchResult(e)}
            >
              <div className="header-input-group flex align-stretch">
                <input
                  type="text"
                  className="form-control fs-20"
                  placeholder={`${t('home_page.placeholder')}`}
                  onChange={(e) => handleSearchTerm(e)}
                  required
                />
               
                <button
                  type="submit"
                  className="form-btn bg-purple flex align-center justify-center"
                >
                  <img src={search_icon} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <section className="section py-7">
        <div className="container">
          <div className="section-content">
            <Title title={t("title.Blogs List")} color={"#0D1741"} />
            <BlogsList blogs={blogs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
