"use client";
import React from "react";
import { GrSearch } from "react-icons/gr";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`?search=${search}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded w-full px-4 py-2 flex items-center justify-between bg-gray-100 dark:bg-slate-600">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Dictionary"
          className="bg-inherit flex-grow  rounded"
        />
        <button>
          <GrSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
