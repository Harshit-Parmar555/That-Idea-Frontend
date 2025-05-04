import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IdeaBoxSkeleton } from "@/custom/Skeleton";
import IdeaBox from "@/custom/IdeaBox";
import { IdeaStore } from "@/store/useIdeaStore";

const Container = () => {
  const navigate = useNavigate();
  const { loadingIdeas, Ideas, loadIdeas, searching, searchIdeas } =
    IdeaStore();

  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  useEffect(() => {
    const query = searchParams.get("query");
    const sort = searchParams.get("sortBy") || "";

    if (query) {
      searchIdeas(query, sort);
    } else {
      loadIdeas(sort);
    }
  }, [searchParams]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const queryParams = new URLSearchParams();

      if (search.trim()) {
        queryParams.set("query", search.trim());
        if (sortBy && sortBy !== "popular") {
          queryParams.set("sortBy", sortBy);
        }
        navigate(`/view-ideas?${queryParams.toString()}`);
        searchIdeas(search.trim(), sortBy);
      } else {
        if (sortBy && sortBy !== "popular") {
          queryParams.set("sortBy", sortBy);
        }
        navigate(`/view-ideas?${queryParams.toString()}`);
        loadIdeas(sortBy);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search, sortBy]);

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  return (
    <div className="w-full px-4 py-4 flex flex-col items-center">
      <div className="w-full sm:w-[90%] lg:w-[82%] flex sm:flex-row items-start sm:items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-md shadow-md px-2 py-3 mb-2">
        <Input
          type="text"
          placeholder="Search ideas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 shadow-none border-none text-base font-[Inter] text-white focus-visible:outline-none focus-visible:ring-0"
        />
      </div>

      <div className="w-full sm:w-[80%] lg:w-[82%] flex justify-end sm:items-center gap-3 py-4">
        <Select value={sortBy || "popular"} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px] bg-zinc-900 text-zinc-200 border-zinc-700 focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 text-zinc-200 border-zinc-700">
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
