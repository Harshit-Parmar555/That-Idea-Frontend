import React, { useEffect } from "react";
import { ViewUserSkeleton } from "@/custom/Skeleton";
import { IdeaStore } from "@/store/useIdeaStore";
import { useParams } from "react-router-dom";

// View user page components
import UserDetail from "./components/UserDetail";
import UserIdeas from "./components/UserIdeas";

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
