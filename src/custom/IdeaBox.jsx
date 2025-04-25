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
    <div className="bg-white border border-zinc-200 rounded-2xl p-5 w-full max-w-sm shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col gap-4">
      {/* Top Info */}
      <div className="flex justify-between items-center text-sm text-zinc-500 font-[Inter]">
        <span>{formatedDate}</span>
        <Badge className="bg-blue-100 text-blue-600">{idea?.category}</Badge>
      </div>

      {/* Author & Title */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-600 font-[Inter]">
            By <span className="font-medium">{idea?.user?.username}</span>
          </p>
          <h2 className="text-lg md:text-xl font-semibold font-[Poppins] text-zinc-900 line-clamp-1">
            {idea?.name}
          </h2>
        </div>
        <img
          src={idea?.user?.avatar}
          alt="Owner"
          className="w-10 h-10 rounded-full object-cover border border-zinc-200"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-600 font-[Inter] line-clamp-3">
        {idea?.description}
      </p>

      {/* Cover Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={idea?.coverImage}
          alt="Idea Cover"
          className="w-full h-44 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-2">
        <Link to={`/view-idea/${idea?._id}`}>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm rounded-md font-[Inter]">
            Read More
          </Button>
        </Link>

        {isProfilePage ? (
          ""
        ) : (
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-transparent stroke-red-500 hover:fill-red-500 transition-all duration-200" />
            <span className="text-sm font-[Inter]">
              {idea?.likes?.length || 0}
            </span>
          </div>
        )}

        {isProfilePage && <DeleteDialog id={idea?._id} />}
      </div>
    </div>
  );
};

export default IdeaBox;
