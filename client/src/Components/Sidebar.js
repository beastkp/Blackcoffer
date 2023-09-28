import React, { useState } from "react";
import {
  BiCaretDown,
  BiCaretUp,
  BiCategory,
  BiLineChart,
  BiSolidCartAlt,
  BiSolidEnvelope,
  BiSolidDetail,
  BiCalendarEdit,
  BiBookReader,
} from "react-icons/bi";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="fixed bg-black w-[230px] h-screen p-2">
        <h1 className="text-white font-bold font-mono text-3xl py-3 text-center">
          Blackcoffer
        </h1>
        <div>
          <div className="flex mt-5">
            <BiCategory className="text-white text-2xl m-1 mr-2" />
            <h3 className="text-white text-xl pb-2">Dashboard</h3>
            {isOpen ? (
              <BiCaretUp
                className="text-white text-2xl m-1 ml-3  cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            ) : (
              <BiCaretDown
                className="text-white text-2xl m-1 ml-3  cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            )}
          </div>
          {isOpen && (
            <ul className="text-white text-md pb-2">
              <div className="flex mt-2">
                <BiLineChart className="text-white text-xl m-1 ml-7" />
                <li className="ml-2 cursor-pointer">
                  <Link to="/analytics">Analytics </Link>
                </li>
              </div>
              <div className="flex mt-2">
                <BiSolidCartAlt className="text-white text-xl m-1 ml-7" />
                <li className="ml-2 cursor-pointer">
                  <Link to="E-Commerce">E-commerce</Link>
                </li>
              </div>
            </ul>
          )}
        </div>
        <div>
          <div className="flex mt-7">
            <BiBookReader className="text-white text-2xl m-1 mr-2" />
            <h3 className="text-white text-xl pb-2 ">Apps and Pages</h3>
          </div>
          <ul className="text-white">
            <div className="flex mt-2">
              <BiSolidEnvelope className="text-white text-xl m-1 ml-7" />
              <li className="ml-2">Email</li>
            </div>
            <div className="flex mt-2">
              <BiSolidDetail className="text-white text-xl m-1 ml-7" />
              <li className="ml-2">Chat</li>
            </div>
            <div className="flex mt-2">
              <BiCalendarEdit className="text-white text-xl m-1 ml-7" />
              <li className="ml-2">Calender</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
