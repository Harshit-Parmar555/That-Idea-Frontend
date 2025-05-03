import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProfileCard = ({ user, logout }) => {
  return (
    <div className="w-full max-w-[600px] flex items-center justify-center gap-6 mt-6 flex-wrap sm:justify-center">
      <img
        src={user.avatar}
        alt=""
        className="h-36 w-36 rounded-full object-cover"
      />
      <div className="flex flex-col text-center gap-4 w-full sm:w-auto">
        <div>
          <h1 className="text-xl font-[Poppins] font-semibold text-white">
            Hello, {user.username}
          </h1>
          <p className="font-[Inter] text-xs text-zinc-200 font-semibold">
            {user.email}
          </p>
        </div>
        <Link to="/upload" className="w-full">
          <Button className="w-full bg-white hover:bg-white/80 text-black cursor-pointer">
            Add Idea
          </Button>
        </Link>

        <Button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-600 cursor-pointer"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
