import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { formatDate } from "@/utils/date";
import DeleteDialog from "./DeleteDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const IdeaBox = ({ idea, isProfilePage = false }) => {
  const formatedDate = formatDate(idea?.createdAt);

  return (
    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full max-w-sm shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_30px_rgba(0,123,255,0.15)] hover:scale-[1.015] transition-all duration-300 ease-in-out flex flex-col gap-5">
      {/* Optional radial overlay for glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.03), transparent)",
        }}
      />

      {/* Background gradient to subtly highlight bottom */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[100%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(114,36,154,0.2) 0%, rgba(36,36,74,0.12) 40%, transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Top Info */}
      <div className="flex justify-between items-center text-xs text-zinc-400 font-[Inter]">
        <span>{formatedDate}</span>
        <Badge className="bg-white/10 text-white backdrop-blur-sm px-2 py-1 rounded-md text-[0.7rem]">
          {idea?.category}
        </Badge>
      </div>

      {/* Author & Title */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-zinc-400 font-[Inter]">
            By{" "}
            <span className="text-white font-medium">
              {idea?.user?.username}
            </span>
          </p>
          <h2 className="text-xl font-semibold font-[Poppins] text-white leading-tight line-clamp-1">
            {idea?.name}
          </h2>
        </div>
        <img
          src={idea?.user?.avatar}
          alt="Owner"
          className="w-10 h-10 rounded-full object-cover border border-zinc-600"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-300 font-[Inter] line-clamp-3 leading-relaxed">
        {idea?.description}
      </p>

      {/* Cover Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={idea?.coverImage}
          alt="Idea Cover"
          className="w-full h-44 object-cover rounded-xl transition-transform duration-300 hover:scale-105 brightness-90 hover:brightness-100"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <Link to={`/view-idea/${idea?._id}`}>
          <Button className="bg-white hover:bg-white/80 cursor-pointer text-black px-4 py-2 text-sm rounded-md font-[Inter] shadow-sm hover:shadow-md transition">
            Read More
          </Button>
        </Link>

        {isProfilePage ? (
          <DeleteDialog id={idea?._id} />
        ) : (
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-transparent stroke-red-500 hover:fill-red-500 transition-all duration-200" />
            <span className="text-sm text-zinc-400 font-[Inter]">
              {idea?.likes?.length || 0}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaBox;
