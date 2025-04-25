import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 md:px-8 text-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-blue-600 text-8xl font-bold font-[Poppins]">404</h1>
        <h2 className="text-2xl md:text-4xl font-[Poppins] font-semibold text-[#0a0908]">
          Page Not Found
        </h2>
        <p className="text-md md:text-lg text-zinc-500 max-w-xl font-[Inter]">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <Button className="rounded-md py-5 px-6 text-sm md:text-base font-[Inter] flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-500">
            <ArrowLeftCircle size={20} /> Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
