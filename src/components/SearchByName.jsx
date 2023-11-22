"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "../css/custom.css";
import { useState } from "react";

export default function SearchByName({ searchTerm }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const term = searchParams.has("term") ? searchParams.get("term") : searchTerm;

  const handleChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
    // router.replace(pathname + "?term=" + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(pathname + "?term=" + keyword);
    setKeyword("")
  };

  return (
    <div>
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
        <button>Search</button>
      </form>
    </div>
  );
}
