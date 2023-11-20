"use client";
import { useState, useEffect } from "react";
import styles from "../../src/app/page.module.css";
import useGetData from "@/hooks/useGetData";
import { usePathname } from "next/navigation";

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [result, setResult] = useState("");
  let data;
  const urlByMeal = `http://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
  data = useGetData(urlByMeal);

  const handleChange = (e) => {
    console.log(searchKeyword);
    setSearchKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchKeyword("");
  };

  useEffect(() => {
  }, [searchKeyword]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" hidden></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter keyword"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div>{data && data.meals}</div>
    </div>
  );
}
