import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { formatDate } from "@/utils/date";
import DeleteDialog from "./DeleteDialog";

const IdeaBox = ({ idea, isProfilePage = false }) => {
  const formatedDate = formatDate(idea?.createdAt);
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-sm p-4 w-80">
      <div className="flex justify-between items-center text-gray-500 text-sm font-[Inter]">
        <p>{formatedDate}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-sm  font-[Poppins] text-zinc-600">
            By {idea?.user?.username}
          </p>
          <h2 className="text-xl font-bold font-[Poppins] line-clamp-1">
            Auto-Save
          </h2>
        </div>

        <img
          src={idea?.user?.avatar}
          alt="Owner"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 font-[Inter] text-sm">
        {idea?.description}
      </p>

      {/* Idea Image */}
      <img
        src={idea?.coverImage}
        alt="Idea Banner"
        className="w-full h-32 object-cover rounded-lg my-3"
      />

      {/* Tags & Button */}
      <div className="flex justify-between items-center mt-2">
        <Link to={`/view-idea/${idea?._id}`}>
          <button className="bg-black text-white px-3 py-1 rounded-sm text-sm font-[Inter] cursor-pointer">
            Read More
          </button>
        </Link>
        {isProfilePage ? <DeleteDialog id={idea?._id} /> : ""}
        <div className="flex items-center gap-1">
          <Heart className="w-6 h-6 transition-all fill-red-500 stroke-none" />
          <p className="text-xs font-[Inter]">{idea?.likes?.length || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default IdeaBox;
