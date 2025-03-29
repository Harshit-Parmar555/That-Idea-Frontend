const ProfileSkeleton = () => {
  return (
    <div className="w-full max-w-[600px] flex items-center justify-center gap-6 flex-wrap sm:justify-center">
      {/* Skeleton for profile image */}
      <div className="h-36 w-36 rounded-full bg-zinc-700 animate-pulse"></div>

      {/* Skeleton for text */}
      <div className="flex flex-col text-center gap-4 w-full sm:w-auto">
        <div>
          <div className="h-6 w-40 bg-zinc-700 animate-pulse rounded-md mx-auto"></div>
          <div className="h-4 w-52 bg-zinc-700 animate-pulse rounded-md mt-2 mx-auto"></div>
        </div>
        <div className="h-10 w-full bg-zinc-700 animate-pulse rounded-md"></div>
        <div className="h-10 w-full bg-red-700 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};
