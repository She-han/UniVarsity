import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

import { FiHome } from "react-icons/fi";
import { MdRssFeed } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = ({ toggleSidebar, isOpen }) => {
  const location = useLocation(); // Get the current route

  return (
    <header className="sticky top-0 z-20 flex max-w-[100%] h-[58px] md:h-[66px] bg-white drop-shadow-md">
      <div className="items-center justify-center hidden w-full p-2 text-center bg-white lg:block lg:mr-8 md:w-1/4">
        <Link to="/home" className="mb-4" >
          {" "}
          {/* Hide on small mobile */}
          <div className="flex">
            <img
              src={logo}
              alt="Logo"
              className="flex w-auto h-[44px] md:pl-7 mt-1"
            />
            <span className="pt-2 pl-4 text-2xl font-semibold text-gray-600 font-logo">
              UniVarsity
            </span>
          </div>
        </Link>
        {/* Hamburger Icon for Mobile and Medium Screens */}

      </div>

      {/* Navigation Section */}
      <div className="flex items-center justify-center w-3/4 px-4 text-center bg-white">
        <nav className="flex items-center justify-center nav">
          <ul className="flex items-center justify-center pl-24 space-x-6 text-center md:pl-32 md:space-x-16 lg:space-x-16 xl:space-x-24">
            <li>
              <Link
                to="/home"
                className={`text-2xl md:text-3xl inline-block px-4 md:px-6 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/home"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding "
                }`}
              >
                <FiHome />
              </Link>
            </li>
            <li>
              <Link
                to="/feed"
                className={`text-2xl md:text-3xl inline-block px-4 md:px-6 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/feed"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <MdRssFeed />
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`text-2xl md:text-3xl inline-block px-4 md:px-6 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/notifications"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <MdNotificationsNone />
              </Link>
            </li>
            <li>
              <Link
                to="/messanger"
                className={`text-2xl md:text-3xl inline-block px-4 md:px-6 lg:px-12 pb-4 pt-6 border-b-4 ${
                  location.pathname === "/messanger"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding"
                }`}
              >
                <TbMessageDots />
              </Link>
            </li>
            <li>
              <button
                onClick={toggleSidebar}
                className="pt-[2px] ml-2 text-2xl md:text-3xl text-gray-600 md:block lg:hidden"
              >
                {isOpen ? <IoClose /> : <HiMenu />}{" "}
                {/* Show close icon if sidebar is open, otherwise show hamburger */}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
