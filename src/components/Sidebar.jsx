import React from "react";
import { useState } from "react";
import SearchBar from "../components/Searchbar";

import img from "../assets/tme.png";
import wlist from "../assets/wishlist.svg";
import feedback from "../assets/feedbacks.svg";
import reminder from "../assets/remainder.svg";
import settings from "../assets/settings.svg";
import contact from "../assets/contactus.svg";
import about from "../assets/aboutus.svg";

import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const data = [
    { label: "Home", link: "/home", content: "This is the home page" },

    // Add more data for other pages or content
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = data.filter(
      (item) =>
        item.label.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div
      className={`fixed z-10 transform bg-white transition duration-300 ease-in-out lg:translate-x-0 lg:w-1/5 xl:w-1/4 w-3/4 lg:mt-0 h-[100vh] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:shadow-none shadow-lg drop-shadow-lg p-6 h-screen`}
    >
      <div className="flex flex-col h-full">
        <div className="App">
          <SearchBar
            data={data}
            placeholder="Search..."
            onSearch={handleSearch}
          />

          <div className="">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <a href={result.link} className="text-purple-600">
                      {result.label} - {result.content}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center ">
            <Link
              to="/account"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/account"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={img} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Shehan Induwara</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/wishlist"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/wishlist"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={wlist} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Wishlist</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/feedbacks"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/feedbacks"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={feedback} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Feedbacks</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/reminder"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/reminder"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={reminder} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Remainder</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/settings"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/settings"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={settings} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Settings</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/contact"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/contact"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={contact} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">Contact Us</h4>
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              to="/about"
              className={`flex p-3 border-2 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
                location.pathname === "/about"
                  ? "border-purple-600 text-purple-600 w-[345px]"
                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:rounded-lg hover:bg-clip-padding w-[345px]"
              }`}
            >
              <span className="mr-3">
                <img src={about} className="w-8 h-8" alt="icon" />
              </span>
              <h4 className="mt-1">About Us</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
