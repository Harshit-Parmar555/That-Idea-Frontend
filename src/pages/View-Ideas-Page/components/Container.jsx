import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { IdeaBoxSkeleton } from "@/custom/Skeleton";
import IdeaBox from "@/custom/IdeaBox";

// Store
import { IdeaStore } from "@/store/useIdeaStore";

const Container = () => {
  const navigate = useNavigate();
  const { loadingIdeas, Ideas, loadIdeas, searching, searchIdeas } =
    IdeaStore();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const query = searchParams.get("query");
    query ? searchIdeas(query) : loadIdeas();
  }, [searchParams]);

  const handleSearch = () => {
    if (search.trim() === "") {
      toast.error("Search field is empty.");
      return;
    }
    navigate(`/view-ideas?query=${search}`);
  };

  return (
    <div className="w-full px-4 py-4 flex flex-col items-center">
      {/* 🔍 Search */}
      <div className="w-full sm:w-[80%] lg:w-[82%] flex items-center bg-zinc-900 border border-zinc-800 rounded-md shadow-md px-4 py-2 mb-10">
        <Input
          type="text"
          placeholder="Search ideas, startups, innovations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 shadow-none border-none text-base font-[Inter] text-white focus-visible:outline-none focus-visible:ring-0"
        />

        <Button
          onClick={handleSearch}
          className="ml-3 bg-white text-black hover:bg-white/80 cursor-pointer rounded-sm flex items-center gap-1"
        >
          <Search size={18} />
          {searching ? "Searching..." : "Search"}
        </Button>
      </div>

      {/* 💡 Ideas List */}
      <div className="w-full max-w-7xl grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {loadingIdeas || searching ? (
          [...Array(6)].map((_, index) => <IdeaBoxSkeleton key={index} />)
        ) : Ideas.length > 0 ? (
          Ideas.map((idea, index) => <IdeaBox key={index} idea={idea} />)
        ) : (
          <div className="col-span-full text-center mt-20 text-zinc-500 text-lg font-[Inter]">
            No ideas found. Try another keyword.
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
