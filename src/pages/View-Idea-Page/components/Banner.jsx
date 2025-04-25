import React from "react";

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

export default Banner;
