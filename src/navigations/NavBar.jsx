import React, { useEffect, useState } from 'react';
import { BiBell, BiHomeAlt, BiVideo, BiCheck } from 'react-icons/bi'; // Added BiCheck for "V" icon
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { theme } from '../features/themes/themeSlice';
import { FaCog, FaCommentDots, FaMoon } from 'react-icons/fa';


const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  //redux 
  const themeMode = useSelector((state) =>state.theme.value)
  const dispatch = useDispatch()

  const handleThemeChange =() =>{
    const newTheme = themeMode === "dark"?"light":"dark"
   dispatch(theme(newTheme))
   localStorage.setItem("theme",newTheme)
  }


  useEffect(()=>{
  const storedTheme = localStorage.getItem("theme")
  if(storedTheme){
    dispatch(theme(storedTheme))
  }else{
    dispatch(theme("light"))
  }


  if(themeMode === "dark"){
    document.body.classList.add('dark-mode')
    document.body.classList.remove("light-mode")

  }else{
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")
  }
  },[themeMode,dispatch])

  const handleNavigation = (path, icon) => {
    navigate(path);
    setActiveIcon(icon);
    setShowProfileModal(false);
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo" onClick={() => navigate("/")}>ZedLuk</a>
        <div className="navbar-center">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <a href="#" className={`nav-link ${activeIcon === "home" ? "active" : ""}`}>
        <BiHomeAlt size={30} onClick={() => handleNavigation("/", "home")} />
      </a>
      
      <a href="#" className={`nav-link ${activeIcon === "video" ? "active" : ""}`}>
        <BiVideo size={30} onClick={() => handleNavigation("/video", "video")} />
      </a>
      
      <a href="#" className={`nav-link ${activeIcon === "notification" ? "active" : ""}`}>
        <BiBell size={30} onClick={() => handleNavigation("/notification", "notification")} />
      </a>

      <div className="navbar-right">
        <div className="icon-container">
          <a href="#" className={`nav-icon ${activeIcon === "message" ? "active" : ""}`}>
            <FaCommentDots className="icon" size={30} color={"dark-mode"?"":"dark-mode"} onClick={() => handleNavigation("/message", "message")}/>
          </a>

          <a href="#" className={`nav-icon ${activeIcon === "menu" ? "active" : ""}`}>
            <FaCog className="icon" size={25} color={"dark-mode"?"":"dark-mode"} onClick={() => handleNavigation("/settings", "menu")}  />
          </a>

          {/* Profile Icon with Checkmark Overlay */}
          <a href="#" className={`nav-icon ${activeIcon === "profile" ? "active" : ""}`}>
            <div className="profile-icon-container" onClick={toggleProfileModal}>
              <img
                src="../jeancy.jpg"
                alt="Profile"
                className="icon user-profile"
              />
              <BiCheck className="profile-check-icon" size={18} /> {/* Overlay checkmark icon */}
            </div>
          </a>
          {showProfileModal && (
            <div className="profile-modal">
              <button onClick={() => handleNavigation("/page", "page")}>Page</button>
              <button onClick={() => handleNavigation("/profile", "profile")}>View Profile</button>
              <button onClick={() => handleNavigation("/settings", "settings")}>Settings</button>
              <button onClick={ handleThemeChange} ><FaMoon size={30} color={"dark-mode"?"light-mode":"dark-mode"} /></button>
              <button onClick={() => console.log("Logout")}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
