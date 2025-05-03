import React from "react";
// Idea box component
import IdeaBox from "@/custom/IdeaBox";

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

export default YourIdeas;
