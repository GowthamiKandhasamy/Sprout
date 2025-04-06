import React, { useState, useRef, useEffect } from 'react';
import logo from '../Images/sprout-bg.png';
import user from '../Images/user.png';
import HeaderItem from './HeaderItem';
import { FaTachometerAlt, FaUsers } from "react-icons/fa";
import { BiCartAlt, BiLogOut } from "react-icons/bi";
import { MdOutlineStorefront } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiAlertTriangle } from "react-icons/fi";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navitems = [
    { name: "DASHBOARD", icon: <FaTachometerAlt />, path: "/" },
    { name: "ORDERS", icon: <BiCartAlt />, path: "/orders" },
    { name: "PRODUCTS", icon: <MdOutlineStorefront />, path: "/products" },
    { name: "REVIEWS", icon: <FaUsers />, path: "/reviews" },
    { name: "COMPLAINTS", icon: <FiAlertTriangle />, path: "/complaints" },
  ];

  const userItems = [
    { name: "PROFILE", icon: <CgProfile />, path: "/profile" },
    { name: "SETTINGS", icon: <FiSettings />, path: "/settings" },
    { name: "LOGOUT", icon: <BiLogOut />, path: "/logout" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='inline-flex items-center w-screen justify-between px-5 py-2 sticky top-0 z-50'>

      <div className='inline-flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt='logo' />
        <div className='hidden md:flex gap-8'>
          {navitems.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} to={item.path} />
          ))}
        </div>
      </div>

      <div className='' ref={dropdownRef}>
        <img
          src={user}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='w-[40px] rounded-full cursor-pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300'
          alt='user'
        />
        {dropdownOpen && (
          <div className='absolute right-0 mt-3 bg-gray-900 border-1 border-white rounded-lg shadow-lg p-3 flex flex-col gap-3 w-48 animate-fadeIn'>
            {userItems.map((item) => (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} to={item.path} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Header;
