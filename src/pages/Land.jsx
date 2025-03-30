import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Land = () => {
  return (
    <div className="w-full h-[90vh] lg:h-auto overflow-hidden px-4 md:px-8 flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-6 text-center lg:mt-44">
        <Button className="bg-transparent hover:bg-transparent rounded-2xl border border-zinc-200 text-black px-4 py-3 text-xs md:text-base">
          ✨ Welcome To Start-X <ArrowRight className="ml-2" />
        </Button>

        <h1 className="w-full text-[#0a0908] font-[Poppins] text-4xl md:text-6xl lg:text-7xl font-bold">
          Turn Ideas into Reality
        </h1>

        <p className="w-full md:w-2xl text-sm md:text-lg text-zinc-500">
          "Have an idea? Share it with the world, get feedback, and connect with
          like-minded thinkers. Whether it's a startup, project, innovation, or
          creative concept—join a community where ideas turn into reality!"
        </p>

        <div className="flex gap-4 md:gap-8">
          <Link to="view-ideas">
            <Button className="rounded-md py-6 px-8 text-sm md:text-base font-[Inter] cursor-pointer bg-blue-600 text-white hover:bg-blue-500">
              Read Ideas!
            </Button>
          </Link>

          <a
            href="https://github.com/Harshit-Parmar555/That-Idea-Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-md py-6 px-8 text-sm md:text-base font-[Inter] cursor-pointer flex items-center gap-2 border-[1px] border-zinc-800">
              Github <Github size={18} />
            </Button>
          </a>
        </div>

        <h1 className="text-xs md:text-sm font-[Inter] mt-4 text-[#22333b] text-center">
          Made With ❤️ | <span className="font-semibold">HARSHIT X CODES</span>
        </h1>
      </div>
    </div>
  );
};

export default Land;
