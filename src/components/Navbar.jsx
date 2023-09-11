import React, { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({darkMode, setDarkMode}) => {
  

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsFillMoonFill /> : <BsMoon />;
  return (
    <div className="d-flex justify-content-between  align-items-center px-5 py-5 bg-element custom-text-white">
      <Link
        to="/"
        className="m-0 text-decoration-none custom-text-white fs-2 fw-semibold"
      >
        Where In The World?
      </Link>
      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);
         if (document.body.classList.contains('light-mode')){
          localStorage.setItem("dark-mode", JSON.stringify(false));
         }else {
          localStorage.setItem('dark-mode', JSON.stringify(true))
         }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex gap-2 align-items-center"
      >
        {icon}
        <p className="m-0">Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
