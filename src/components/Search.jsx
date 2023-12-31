"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "../css/custom.css";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Search({ searchTerm }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  let term = searchParams.has("term") ? searchParams.get("term") : searchTerm;

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(pathname + "?term=" + keyword);
    setKeyword("");
  };

  return (
    <div className="Search">
      <h1>Search by name</h1>
      <form>
        <label htmlFor="searchByName" />
        <input
          name="searchByName"
          type="text"
          placeholder="e.g., Curry"
          onChange={handleChange}
          value={keyword}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            fontFamily: "Cascadia Mono",
            borderWidth: 1,
            backgroundColor: "transparent",
            color: "#308080",
            borderRight: 1,
            borderColor: "#308080",
            "&:hover": { backgroundColor: "#308080", color: "white" },
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
