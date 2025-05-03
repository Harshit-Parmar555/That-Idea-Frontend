import React, { useState } from "react";
import { AuthStore } from "@/store/useAuthStore";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import { IdeaStore } from "@/store/useIdeaStore";
import clsx from "clsx";

const IdeaDetail = ({ idea, id }) => {
  const { user, isAuthenticated } = AuthStore();
  const { likeIdea } = IdeaStore();
  const [likes, setLikes] = useState(idea?.likes || []);
  const formatedDate = formatDate(idea?.createdAt);

  const handleLike = async () => {
    if (!isAuthenticated) {
      return toast.error("Please login first!");
    }

    // 🔵 1. Optimistic UI update first
    setLikes((prevLikes) => {
      const updatedLikes = prevLikes.includes(user?._id)
        ? prevLikes.filter((likeId) => likeId !== user?._id)
        : [...prevLikes, user?._id];
      return updatedLikes;
    });

    try {
      // 🔵 2. Then call API
      await likeIdea(id);
    } catch (error) {
      // 🔵 3. If API fails, rollback the UI
      setLikes((prevLikes) => {
        const updatedLikes = prevLikes.includes(user?._id)
          ? prevLikes.filter((likeId) => likeId !== user?._id)
          : [...prevLikes, user?._id];
        return updatedLikes;
      });

      toast.error("Failed to like the idea.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 mt-12">
      {/* 🔹 User Info */}
      <div className="w-full sm:w-[90%] lg:w-[60%] flex items-center justify-between text-center sm:text-left gap-6">
        <Link to={`/view-user/${idea?.user._id}`}>
          <div className="flex items-center gap-2">
            <img
              src={idea?.user.avatar}
              alt="User Avatar"
              className="h-14 w-14 object-cover rounded-full border-2 border-zinc-800 shadow-md"
            />
            <div>
              <h1 className="text-xl font-[Poppins] font-semibold text-white">
                {idea?.user?.username}
              </h1>
              <p className="font-[Inter] text-xs text-zinc-200">
                {idea?.user?.email}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-4">
          <p className="font-[Inter] text-xs text-zinc-200">{formatedDate}</p>
          <Badge className="bg-white text-black">{idea?.category}</Badge>
        </div>
      </div>

      {/* 🔹 Pitch Details */}
      <div className="w-full sm:w-[90%] lg:w-[60%] text-left flex flex-col gap-6 ">
        <h1 className="text-2xl font-[Poppins] font-semibold text-white">
          {idea?.name}
        </h1>
        <Badge className="bg-white/10 text-white">{idea?.category}</Badge>
        <DetailRow title="Description" content={idea?.description} />
        <DetailRow title="Pitch" content={idea?.pitch} />
      </div>
      <div className="w-full sm:w-[90%] lg:w-[60%] flex items-center justify-between gap-4 pb-8">
        <div className="flex gap-2">
          <button>
            <Heart
              onClick={handleLike}
              className={clsx(
                "w-6 h-6 transition-all duration-200 stroke-red-600 hover:scale-125",
                likes?.includes(user?._id) && "fill-red-600"
              )}
            />
          </button>
          <p className="text-zinc-400">{likes?.length}</p>
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Component for Pitch Details
const DetailRow = ({ title, content }) => (
  <>
    <p className="font-[Inter] text-lg text-zinc-200 leading-relaxed break-words text-wrap">
      <span className="text-white font-semibold">{title} : </span> {content}
    </p>
  </>
);

export default IdeaDetail;
