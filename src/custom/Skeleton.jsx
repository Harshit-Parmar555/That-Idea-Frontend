export const IdeaBoxSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 shadow-lg rounded-sm p-4 sm:w-44 md:w-96 animate-pulse">
      {/* Date */}
      <div className="h-4 w-24 bg-zinc-700 rounded"></div>

      {/* User & Title */}
      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="h-4 w-20 bg-zinc-700 rounded mb-1"></div>
          <div className="h-6 w-32 bg-zinc-600 rounded"></div>
        </div>
        <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
      </div>

      {/* Description */}
      <div className="mt-2 space-y-2">
        <div className="h-4 w-full bg-zinc-700 rounded"></div>
        <div className="h-4 w-3/4 bg-zinc-700 rounded"></div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-44 bg-zinc-700 rounded-lg my-3"></div>

      {/* Button */}
      <div className="h-8 w-24 bg-zinc-600 rounded"></div>
    </div>
  );
};

export const ProfileSkeleton = ({ ideaCount = 3 }) => {
  return (
    <div className="w-full flex flex-col items-center pt-28 px-4">
      {/* Profile Info Skeleton */}
      <div className="w-full max-w-[600px] flex items-center justify-center gap-6 flex-wrap sm:justify-center">
        <div className="h-36 w-36 rounded-full bg-zinc-700 animate-pulse"></div>
        <div className="flex flex-col text-center gap-4 w-full sm:w-auto">
          <div>
            <div className="h-6 w-40 bg-zinc-700 animate-pulse rounded-md mx-auto"></div>
            <div className="h-4 w-52 bg-zinc-700 animate-pulse rounded-md mt-2 mx-auto"></div>
          </div>
          <div className="h-10 w-full bg-zinc-700 animate-pulse rounded-md"></div>
          <div className="h-10 w-full bg-zinc-800 animate-pulse rounded-md"></div>
        </div>
      </div>

      {/* Ideas Section Skeleton */}
      <div className="w-full flex flex-col items-center mt-12 mb-4">
        <h1 className="text-2xl font-[Poppins] font-semibold text-zinc-200">
          Your Ideas
        </h1>
        <div className="w-[90%] flex flex-wrap justify-center gap-6 mt-6">
          {[...Array(ideaCount)].map((_, index) => (
            <IdeaBoxSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ViewIdeaSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      <BannerSkeleton />
      <IdeaDetailSkeleton />
    </div>
  );
};

// Banner
const BannerSkeleton = () => {
  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-full sm:w-[90%] lg:w-[60%] aspect-[16/9] rounded-md overflow-hidden shadow-lg border border-zinc-800 bg-zinc-800 animate-pulse"></div>
    </div>
  );
};

// Idea Details
const IdeaDetailSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-12">
      <div className="w-full sm:w-[90%] lg:w-[60%] flex flex-col sm:flex-row items-start justify-between text-center sm:text-left gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-zinc-800 animate-pulse"></div>
          <div>
            <div className="w-32 h-6 bg-zinc-800 animate-pulse rounded"></div>
            <div className="w-40 h-4 mt-2 bg-zinc-700 animate-pulse rounded"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-4 bg-zinc-800 animate-pulse rounded"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 animate-pulse rounded"></div>
            <div className="w-6 h-4 bg-zinc-800 animate-pulse rounded"></div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[90%] lg:w-[60%] text-left flex flex-col gap-6 pb-8">
        <div className="w-40 h-6 bg-zinc-800 animate-pulse rounded"></div>
        <SkeletonDetail />
        <SkeletonDetail />
      </div>
    </div>
  );
};

// Detail Rows
const SkeletonDetail = () => (
  <div className="flex flex-col gap-2">
    <div className="w-28 h-5 bg-zinc-800 animate-pulse rounded"></div>
    <div className="w-full h-4 bg-zinc-700 animate-pulse rounded"></div>
    <div className="w-3/4 h-4 bg-zinc-700 animate-pulse rounded"></div>
  </div>
);

export const ViewUserSkeleton = ({ ideaCount = 3 }) => {
  return (
    <div className="w-full flex flex-col items-center mt-28 px-4">
      <UserDetailSkeleton />
      <div className="w-full flex flex-col items-center mt-12 mb-4">
        <h1 className="text-2xl font-[Poppins] font-semibold text-zinc-200">
          User Ideas
        </h1>
        <div className="w-[90%] flex flex-wrap justify-center gap-6 mt-6">
          {[...Array(ideaCount)].map((_, index) => (
            <IdeaBoxSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const UserDetailSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full sm:w-[90%] lg:w-[60%] flex flex-col sm:flex-row items-start justify-between text-center sm:text-left gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-zinc-700 animate-pulse"></div>
          <div>
            <div className="h-6 w-32 bg-zinc-700 animate-pulse rounded-md"></div>
            <div className="h-4 w-40 bg-zinc-700 animate-pulse rounded-md mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-4 w-32 bg-zinc-700 animate-pulse rounded-md"></div>
          <div className="h-4 w-24 bg-zinc-700 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
