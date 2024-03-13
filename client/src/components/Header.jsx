import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center flex-wrap justify-between mx-auto max-w-6xl p-3">
        <div>
          <Link to="/">
            <h1 className="font-bold md:text-xl text-sm">
              <span className="text-slate-500">Sharma</span>
              <span className="text-slate-700">Estate</span>
            </h1>
          </Link>
        </div>
        <div>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
        </div>
        <div>
          <ul className="flex gap-4  ">
            <Link to="/">
              <li className="hidden sm:inline cursor-pointer hover:underline underline-offset-4">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline cursor-pointer hover:underline underline-offset-4">
                About
              </li>
            </Link>
            <Link to="/profile">
              {currentUser? (<img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />):(
                <li className=" cursor-pointer hover:underline underline-offset-4">
                Sign In
              </li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
