"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaChartLine, FaCog } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { GrUpgrade } from "react-icons/gr";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-12 flex flex-col items-center '
      } h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className={`${isOpen ? 'block' : 'hidden'} text-2xl font-bold`}>
          <span className="text-[#9a53df]">Tiny</span>Tography
        </h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? '«' : '»'}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4   w-full flex flex-col gap-5 justify-center">
        <Link
          href="/"
          className={`flex items-center p-2 hover:bg-gray-700 w-fit bg-gradient-to-tr from-[#4A68FF] to-[#9A53DF] rounded-full  gap-2 ${isOpen ? "px-5 py-2  mx-auto" : "pl-2.5"}`}
          data-tooltip-id="sidebar-tooltip"
          data-tooltip-content="Upgrade Plan"
        >
          <GrUpgrade size="22" />
          <span className={`${isOpen ? 'block' : 'hidden'}`}>Upgrade Plan</span>
        </Link>
        <Link
          href="/"
          className={`flex items-center p-2 hover:bg-gray-700 w-full gap-2 ${isOpen ? "pl-5" : "pl-2.5"}`}
          data-tooltip-id="sidebar-tooltip"
          data-tooltip-content="Home"
        >
          <FaHome size="22" />
          <span className={`${isOpen ? 'block' : 'hidden'}`}>Home</span>
        </Link>
        <Link
          href="/dashboard"
          className={`flex items-center p-2 hover:bg-gray-700 w-full gap-2 ${isOpen ? "pl-5" : "pl-2.5"}`}
          data-tooltip-id="sidebar-tooltip"
          data-tooltip-content="Dashboard"
        >
          <FaChartLine size="22" />
          <span className={`${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
        </Link>
        <Link
          href="/settings"
          className={`flex items-center p-2 hover:bg-gray-700 w-full gap-2 ${isOpen ? "pl-5" : "pl-2.5"}`}
          data-tooltip-id="sidebar-tooltip"
          data-tooltip-content="Settings"
        >
          <FaCog size="22" />
          <span className={`${isOpen ? 'block' : 'hidden'}`}>Settings</span>
        </Link>
      </nav>

      {/* Tooltip */}
      <Tooltip id="sidebar-tooltip" place="right" />
      <p className={`text-xs absolute bottom-4 left-2 ${isOpen ? 'block' : 'hidden'}`}>Built by <a className="hover:underline hover:text-amber-400" href="https://promise-okechukwu.vercel.app/">Promise Okechukwu</a> </p>
    </div>
  );
};

export default Sidebar;