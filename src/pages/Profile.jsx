import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import IdeaBox from "@/custom/IdeaBox";
import { ProfileSkeleton } from "@/custom/Skeleton";
import { IdeaStore } from "@/store/useIdeaStore";
import { AuthStore } from "@/store/useAuthStore";
import { Link } from "react-router-dom";

const Profile = () => {
  const { loadLoggedInUserIdea, loadingLoggedInUserIdeas, loggedInUserIdeas } =
    IdeaStore();
  const { user, logout } = AuthStore();

  useEffect(() => {
    loadLoggedInUserIdea();
  }, []);

  if (loadingLoggedInUserIdeas) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="w-full h-auto flex flex-col items-center mt-28 px-4">
      <ProfileCard user={user} logout={logout} />
      <YourIdeas ideas={loggedInUserIdeas} />
    </div>
  );
};

export default Profile;

// Profile page components

const ProfileCard = ({ user, logout }) => {
  return (
    <div className="w-full max-w-[600px] flex items-center justify-center gap-6 flex-wrap sm:justify-center">
      <img
        src={user.avatar}
        alt=""
        className="h-36 w-36 rounded-full object-cover"
      />
      <div className="flex flex-col text-center gap-4 w-full sm:w-auto">
        <div>
          <h1 className="text-2xl font-[Poppins] font-semibold text-zinc-200">
            Hello, {user.username}
          </h1>
          <p className="font-[Inter] text-sm text-zinc-200 font-semibold">
            {user.email}
          </p>
        </div>
        <Link to="/upload" className="w-full">
          <Button className="w-full bg-white text-black hover:bg-zinc-200">
            Add Idea
          </Button>
        </Link>

        <Button onClick={logout} className="w-full bg-red-600 hover:bg-red-600">
          Logout
        </Button>
      </div>
    </div>
  );
};

const YourIdeas = ({ ideas }) => {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-4">
      <h1 className="text-2xl font-[Poppins] font-semibold text-zinc-200">
        Your Ideas
      </h1>
      <div className="w-[90%] flex flex-wrap justify-center gap-6 mt-6">
        {ideas.map((idea, index) => (
          <IdeaBox key={index} idea={idea} isProfilePage={true} />
        ))}
      </div>
    </div>
  );
};
