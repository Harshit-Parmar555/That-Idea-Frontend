import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthStore } from "@/store/useAuthStore.js";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const { signup, user } = AuthStore();
  const handleSignup = () => {
    try {
      signup();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-16 bg-[#101010] flex items-center justify-between px-6 md:px-16 border-b-[1px] border-zinc-800 fixed z-20">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 bg-white rounded-sm p-1">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <h1 className="text-base text-white font-[Poppins] font-bold">
          That-Idea
        </h1>
      </div>
      {user ? (
        <Link to="/profile">
          <div className="flex items-center gap-2">
            <img
              src={user?.avatar}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="hidden md:flex md:flex-col">
              <p className="text-sm font-[Inter] text-zinc-200">Hello</p>
              <h1 className="text-base font-[Inter] text-white font-semibold line-clamp-1">
                {user.username}
              </h1>
            </div>
          </div>
        </Link>
      ) : (
        <Button
          onClick={handleSignup}
          className="flex items-center rounded-sm cursor-pointer bg-white text-black hover:bg-white/80 px-6 py-4"
        >
          <FaGoogle className="text-black" />
          Sign Up
        </Button>
      )}
    </div>
  );
};

export default Navbar;
