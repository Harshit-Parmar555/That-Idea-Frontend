import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Land = () => {
  return (
    <div className="w-full h-dvh overflow-hidden px-4 md:px-8 flex items-center justify-center relative bg-[#090909]">
      {/* Gradient overlay */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[100%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(114,36,154,0.19), rgba(36,36,74,0.12), transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Main content */}
      <div className="w-full flex flex-col items-center gap-6 text-center z-10">
        <Button className="bg-transparent hover:bg-transparent rounded-full border border-zinc-800 text-white px-4 py-3 text-xs md:text-base font-[Inter]">
          ✨ Welcome To That-Idea <ArrowRight className="ml-2" />
        </Button>

        <h1 className="w-full text-white font-[Poppins] text-5xl md:text-6xl lg:text-7xl font-bold">
          Turn{" "}
          <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent tracking-wide">
            Ideas
          </span>{" "}
          into Reality
        </h1>

        <p className="w-full md:w-2xl text-md md:text-lg text-zinc-400 font-[Inter]">
          "Share your ideas, get feedback, and connect with like-minded
          thinkers. Join a community where ideas become reality!"
        </p>

        <div className="flex gap-4 md:gap-8">
          <Link to="view-ideas">
            <Button className="rounded-md py-6 px-8 text-sm md:text-base cursor-pointer bg-white text-black hover:bg-white/80 font-[Space_Grotesk] flex items-center gap-2">
              Read Ideas!
            </Button>
          </Link>

          <a
            href="https://github.com/Harshit-Parmar555/That-Idea-Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-md py-6 px-8 text-sm md:text-base font-[Space_Grotesk] cursor-pointer flex items-center gap-2 border-[1px] border-zinc-800">
              Github <FaGithub />
            </Button>
          </a>
        </div>

        <h1 className="text-xs md:text-xs mt-4 text-white text-center font-[JetBrains_Mono]">
          Made With ❤️ | <span className="font-semibold">HARSHIT X CODES</span>
        </h1>
      </div>
    </div>
  );
};

export default Land;
