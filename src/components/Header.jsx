import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

import { FiHome } from "react-icons/fi";
import { MdRssFeed } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";

const Header = ({ toggleSidebar, isOpen }) => {
  const location = useLocation(); // Get the current route

  return (
    <header className="sticky top-0 z-20 flex max-w-[100%] h-[58px] md:h-[66px] bg-white drop-shadow-md">
      <div className="flex items-center justify-between w-full p-2 bg-white lg:mr-8 md:w-1/4">
        <Link to="/home" className="hidden lg:block">
          {" "}
          {/* Hide on small mobile */}
          <div className="flex">
            <img
              src={logo}
              alt="Logo"
              className="flex w-full h-[64px] md:pl-7 pt-2 pb-2"
            />
            <span className="p-4 text-2xl font-semibold text-gray-600 font-logo">
              UniVarsity
            </span>
          </div>
        </Link>
        {/* Hamburger Icon for Mobile and Medium Screens */}
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-800 md:block lg:hidden"
        >
          {isOpen ? "✖️" : "☰"}{" "}
          {/* Show close icon if sidebar is open, otherwise show hamburger */}
        </button>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center justify-center w-3/4 bg-white">
        <nav className="flex items-center justify-center nav">
          <ul className="flex pr-8 space-x-8 md:space-x-16 lg:space-x-16 xl:space-x-24">
            <li>
              <Link
                to="/home"
                className={`text-xl md:text-3xl inline-block px-2 md:px-4 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/home"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding "
                }`}
              >
                <FiHome />
              </Link>
            </li>
            <li>
              <Link
                to="/feed"
                className={`text-xl md:text-3xl inline-block px-2 md:px-4 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/feed"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <MdRssFeed />
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`text-xl md:text-3xl inline-block px-2 md:px-4 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/notifications"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <MdNotificationsNone />
              </Link>
            </li>
            <li>
              <Link
                to="/messanger"
                className={`text-xl md:text-3xl inline-block px-2 md:px-4 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/messanger"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <TbMessageDots />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
