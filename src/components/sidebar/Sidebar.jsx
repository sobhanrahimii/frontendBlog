import React from 'react';
import "./Sidebar.scss";
import {GiPapers} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useSidebarContext } from '../../context/sidebarContext';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    // translation
    const {t} = useTranslation("global")
    // sidebar context
    const {isopenSidebar, closeSidebar} = useSidebarContext();
  return (
    <div className = {`sidebar ${isopenSidebar ? 'sidebar-open' : ""}`}  dir="auto">
        <button type = "button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
            <FaTimes size = {24} className='text-white' />
        </button>
        <Link className='navbar-brand text-white flex align-center fs-26' to = "/">
            <span className='navbar-brand-icon'>
                <GiPapers />
            </span>
            <span className='navbar-brand-txt font-rubik fw-5'>Blog.</span>
        </Link>
        <ul className = "sidebar-nav font-rubik my-5">
            <li className='nav-item'>
                <Link to = "/" onClick={()=>closeSidebar()} className='nav-link text-white fw-4 fs-18'>{t('sidebar.Home')}</Link>
            </li>
            <li className='nav-item'>
                <Link to = "/blogs" onClick={()=>closeSidebar()} className='nav-link text-white fw-4 fs-18'>{t('sidebar.Blogs')}</Link>
            </li>
            <li className='nav-item'>
                <Link to = "/about" onClick={()=>closeSidebar()} className='nav-link text-white fw-4 fs-18'>{t('sidebar.About')}</Link>
            </li>

            <li className='nav-item'>
                <Link to = "/register" onClick={()=>closeSidebar()} className='nav-link text-white fw-4 fs-18'>{t('sidebar.Register')}</Link>
            </li>


            <li className='nav-item'>
                <Link to = "/login" onClick={()=>closeSidebar()} className='nav-link text-white fw-4 fs-18'>{t('sidebar.Login')}</Link>
            </li>

        </ul>
        <div className='sidebar-blocks my-5'>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>{t('sidebar.Address')}</h3>
                <p className='text-white'>{t('sidebar.Address_desc')}</p>
            </div>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>{t('sidebar.Phone')}</h3>
                <p className='text-white'>{t('sidebar.phone_desc')}</p>
            </div>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>{t('sidebar.Email')}</h3>
                <p className='text-white'>{t('sidebar.Email_desc')}</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar