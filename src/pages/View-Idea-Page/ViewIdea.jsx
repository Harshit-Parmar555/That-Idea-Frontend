import React, { useEffect } from "react";
import { ViewIdeaSkeleton } from "@/custom/Skeleton";
import { IdeaStore } from "@/store/useIdeaStore";

import { useParams } from "react-router-dom";

// Components of View-Idea page
import Banner from "./components/Banner";
import IdeaDetail from "./components/IdeaDetail";

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
    <div className="w-full min-h-screen bg-[#090909] flex flex-col items-center px-4">
      <Banner idea={viewIdea} />
      <IdeaDetail idea={viewIdea} id={id} />
    </div>
  );
};

export default ViewIdea;
