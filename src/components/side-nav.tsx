import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdSettingsInputHdmi } from "react-icons/md";

export const SideNav: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-56 flex-shrink-0 p-4">
      <div className="text-2xl font-bold mb-6">Navigation</div>
      <ul>
        <li className="mb-2">
          <Link to="/profile" className="flex items-center hover:text-blue-500">
            <CgProfile className="mr-2" />
            Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/home" className="flex items-center hover:text-blue-500">
            <AiFillHome className="mr-2" />
            My Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/meter" className="flex items-center hover:text-blue-500">
            <ImMeter className="mr-2" />
            My Meter
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/alerts" className="flex items-center hover:text-blue-500">
            <AiFillBell className="mr-2" />
            My Alerts
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/electronics"
            className="flex items-center hover:text-blue-500"
          >
            <MdSettingsInputHdmi className="mr-2" />
            Electronics
          </Link>
        </li>

        <li className="mb-2">
          <Link
            to="/settings"
            className="flex items-center hover:text-blue-500"
          >
            <FiSettings className="mr-2" />
            Settings
          </Link>
        </li>
      </ul>

      <Link
        to="/login"
        className="flex items-center absolute bottom-0 mb-6 hover:text-blue-500"
      >
        <AiFillBell className="mr-2" />
        Logout
      </Link>
    </div>
  );
};
