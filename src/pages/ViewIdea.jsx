import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { ViewIdeaSkeleton } from "@/custom/Skeleton";
import { IdeaStore } from "@/store/useIdeaStore";
import { AuthStore } from "@/store/useAuthStore";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";

const ViewIdea = () => {
  const { loadViewIdea, loadingViewIdea, viewIdea } = IdeaStore();
  const { id } = useParams();
  useEffect(() => {
    loadViewIdea(id);
  }, [id]);

  if (loadingViewIdea) {
    return <ViewIdeaSkeleton />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      <Banner idea={viewIdea} />
      <IdeaDetail idea={viewIdea} id={id} />
    </div>
  );
};

export default ViewIdea;

// 🔹 Banner Section (Fixed Aspect Ratio)
const Banner = ({ idea }) => {
  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-full sm:w-[90%] lg:w-[60%] aspect-[16/9] rounded-md overflow-hidden shadow-lg border-[1px] border-zinc-800">
        <img
          src={idea?.coverImage}
          alt="Idea Banner"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

// 🔹 Idea Details Section
const IdeaDetail = ({ idea, id }) => {
  const { user, isAuthenticated } = AuthStore();
  const { likeIdea } = IdeaStore();
  const [likes, setlikes] = useState(idea?.likes);
  const formatedDate = formatDate(idea?.createdAt);

  const handleLike = async () => {
    if (!isAuthenticated) {
      return toast.error("Please login first!");
    }
    try {
      await likeIdea(id);
      setlikes((prevLikes) => {
        const updatedLikes = prevLikes.includes(user?._id)
          ? prevLikes.filter((likeId) => likeId !== user?._id) // Unlike
          : [...prevLikes, user?._id]; // Like
        return updatedLikes;
      });
    } catch (error) {
      toast.error("Failed to like the idea.");
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-12">
      {/* 🔹 User Info */}
      <div className="w-full sm:w-[90%] lg:w-[60%] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
        <Link to={`/view-user/${idea?.user._id}`}>
          <div className="flex items-center gap-2">
            <img
              src={idea?.user.avatar}
              alt="User Avatar"
              className="h-16 w-16 object-cover rounded-full border-2 border-gray-300 shadow-md "
            />
            <div>
              <h1 className="text-2xl font-[Poppins] font-semibold text-gray-200">
                {idea?.user?.username}
              </h1>
              <p className="font-[Inter] text-sm text-gray-400">
                {idea?.user?.email}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-4">
          <p className="font-[Inter] text-sm text-gray-600">{formatedDate}</p>
          <div className="flex items-center gap-2">
            <button>
              <Heart
                onClick={handleLike}
                className={`w-6 h-6 transition-all stroke-red-600  ${
                  likes?.includes(user?._id) ? "fill-red-600" : ""
                }`}
              />
            </button>
            <p className="text-zinc-400">{likes?.length}</p>
          </div>
        </div>
      </div>

      {/* 🔹 Pitch Details */}
      <div className="w-full sm:w-[90%] lg:w-[60%] text-left flex flex-col gap-6 pb-8">
        <h1 className="text-2xl font-[Poppins] font-semibold text-gray-200">
          {idea?.name}
        </h1>
        <Badge>{idea?.category}</Badge>
        <DetailRow title="Description" content={idea?.description} />
        <DetailRow title="Pitch" content={idea?.pitch} />
      </div>
    </div>
  );
};

// 🔹 Reusable Component for Pitch Details
const DetailRow = ({ title, content }) => (
  <>
    <p className="font-[Inter] text-lg text-gray-300 leading-relaxed break-words text-wrap">
      <span className="text-white font-semibold">{title} : </span> {content}
    </p>
  </>
);
