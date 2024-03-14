import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const {currentUser}= useSelector((state)=>state.user);
  return <div className="max-w-lg mx-auto">
    <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
    <form className="flex flex-col gap-4 ">
      <img src={currentUser.avatar} alt="profile"  className="cursor-pointer self-center mt-2 rounded-full h-24 w-24 object-cover"/>
      <input type="text" name="username" id="username" placeholder="username" className="border p-3 rounded-lg"/>
      <input type="email" name="email" id="email" placeholder="email" className="border p-3 rounded-lg"/>
      <input type="password" name="password" id="password" placeholder="password" className="border p-3 rounded-lg"/>
      <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">update</button>
    </form>
    <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete account</span>
      <span className="text-red-700 cursor-pointer">Sign out</span>
    </div>
  </div>
}

export default Profile;
