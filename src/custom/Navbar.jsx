import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthStore } from "@/store/useAuthStore.js";

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
    <div className="w-full h-16 bg-black flex items-center justify-between px-4 md:px-16 border-b-[1px] border-y-zinc-800 fixed">
      <img src={logo} alt="" className="h-8 invert" />
      {user ? (
        <Link to="/profile">
          <div className="flex items-center gap-2">
            <img
              src={user?.avatar}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-[Inter] text-zinc-200">Hello</p>
              <h1 className="text-base font-[Inter] text-zinc-200 font-semibold">
                {user.username}
              </h1>
            </div>
          </div>
        </Link>
      ) : (
        <Button
          onClick={handleSignup}
          className="rounded-xs cursor-pointer bg-white text-black hover:bg-zinc-200"
        >
          Sign Up
        </Button>
      )}
    </div>
  );
};

export default Navbar;
