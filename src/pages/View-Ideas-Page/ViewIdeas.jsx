import React, { useState, useEffect } from "react";



import { IdeaBoxSkeleton } from "@/custom/Skeleton";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IdeaStore } from "@/store/useIdeaStore.js";

// View-Ideas page component
import Container from "./components/Container";

const ViewIdeas = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-28">
      <Container />
    </div>
  );
};

export default ViewIdeas;
