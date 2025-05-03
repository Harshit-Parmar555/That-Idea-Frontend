import React, { useEffect } from "react";

// Skeletons
import { ProfileSkeleton } from "@/custom/Skeleton";
// Stores Import
import { IdeaStore } from "@/store/useIdeaStore";
import { AuthStore } from "@/store/useAuthStore";
// components of profile card
import ProfileCard from "./components/ProfileCard";
import YourIdeas from "./components/YourIdeas";

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
    <div className="w-full min-h-screen flex flex-col items-center pt-24 px-4">
      <ProfileCard user={user} logout={logout} />
      <YourIdeas ideas={loggedInUserIdeas} />
    </div>
  );
};

export default Profile;
