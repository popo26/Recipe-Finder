"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "../css/custom.css";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Search({ searchTerm }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const term = searchParams.has("term") ? searchParams.get("term") : searchTerm;

  const handleChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(pathname + "?term=" + keyword);
    setKeyword("")
  };

  return (
    <div className="Search">
      <h1>Search by name</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchByName" />
        <input
          name="searchByName"
          type="text"
          placeholder="e.g., Curry"
          onChange={handleChange}
          value={keyword}
        />
        <Button variant="contained" sx={{fontFamily:'Cascadia Mono', backgroundColor:"#308080"}}>Search</Button>
      </form>
    </div>
  );
}
