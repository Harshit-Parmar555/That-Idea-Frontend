import React, { useEffect } from "react";
import IdeaBox from "@/custom/IdeaBox";
import { ViewUserSkeleton } from "@/custom/Skeleton";
import { IdeaStore } from "@/store/useIdeaStore";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/date";

const ViewUserProfile = () => {
  const { loadingViewUser, viewUserIdeas, viewUser, loadViewUser } =
    IdeaStore();
  const { id } = useParams();

  useEffect(() => {
    loadViewUser(id);
  }, []);

  if (loadingViewUser) {
    return <ViewUserSkeleton />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      <UserDetail user={viewUser} />
      <UserIdeas ideas={viewUserIdeas} />
    </div>
  );
};

export default ViewUserProfile;

const UserDetail = ({ user }) => {
  const formatedDate = formatDate(user?.createdAt);
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-28">
      <div className="w-full sm:w-[90%] lg:w-[60%] flex flex-col items-center sm:flex-row  justify-between text-center sm:text-left gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar}
            alt="User Avatar"
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-300 shadow-md "
          />
          <div>
            <h1 className="text-2xl font-[Poppins] font-semibold text-black">
              {user?.username}
            </h1>
            <p className="font-[Inter] text-sm text-gray-800">{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-[Inter] text-sm text-gray-600">
            Joined on : {formatedDate}
          </p>
          <p className="font-[Inter] text-sm text-gray-600">
            Total Ideas : {user?.ideas.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserIdeas = ({ ideas }) => {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-4">
      <h1 className="text-2xl font-[Poppins] font-semibold text-zinc-800">
        User Ideas
      </h1>
      <div className="w-[90%] flex flex-wrap justify-center gap-6 mt-6">
        {ideas.map((idea, index) => (
          <IdeaBox key={index} idea={idea} />
        ))}
      </div>
    </div>
  );
};
