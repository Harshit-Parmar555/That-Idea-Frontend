import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import IdeaBox from "@/custom/IdeaBox";
import { IdeaBoxSkeleton } from "@/custom/Skeleton";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IdeaStore } from "@/store/useIdeaStore.js";

const ViewIdeas = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-28">
      <Container />
    </div>
  );
};

export default ViewIdeas;

const Container = () => {
  const navigate = useNavigate();
  const { loadingIdeas, Ideas, loadIdeas, searching, searchIdeas } =
    IdeaStore();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  useEffect(() => {
    const query = searchParams.get("query");

    if (query) {
      searchIdeas(query);
    } else {
      loadIdeas();
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (search.trim() === "") {
      toast.error("Search Field is Empty");
      return;
    }
    navigate(`/view-ideas?query=${search}`);
  };

  return (
    <div className="w-[90%] flex flex-col items-center gap-6">
      {/* 🔹 Search Box */}
      <div className="w-full sm:w-[80%] lg:w-[50%] h-14 flex items-center border rounded-md px-4 py-2 bg-zinc-950 shadow-sm mb-4 border-zinc-700">
        <Input
          type="text"
          placeholder="Search . . . "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none border-none text-lg font-[Inter] text-zinc-200"
        />
        <Button
          onClick={handleSearch}
          className="ml-3 bg-white text-black hover:bg-zinc-200 rounded-sm"
        >
          <Search className="mr-1" size={18} />
          Search
        </Button>
      </div>

      <div className="w-full flex items-center justify-center gap-6 flex-wrap pb-12">
        {loadingIdeas || searching
          ? [...Array(3)].map((_, index) => <IdeaBoxSkeleton key={index} />)
          : Ideas.map((Idea, index) => <IdeaBox key={index} idea={Idea} />)}
      </div>
    </div>
  );
};
