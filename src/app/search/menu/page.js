"use client";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import Link from "next/link";
import SearchByName from "@/components/SearchByName";

async function getMealByName(name) {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    { method: "GET", mode: "cors" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post #" + name);
  }
  return res.json();
}

// export default async function Menu() {
export default async function Menu({ searchParams }) {
  // const limit = searchParams.limit ? searchParams.limit : 5;
  const term = searchParams.term ? searchParams.term : "";
  const data = await getMealByName(term);
  const resultList = data.meals.map((item) => (
    <>
    <div key={item.idMeal} >
        <Link href={`/search/menu/` + item.idMeal}>
      <h3 >
        {item.strMeal}
      </h3>
      <img src={item.strMealThumb} alt={item.strMeal} width="200px" />
      <h5>{item.strCategory}</h5>
      <h5>{item.strArea}</h5>
      </Link>

    </div>
    </>
  ));

  return (
    <div>
      <SearchByName searchTerm={term} />
      <div>{resultList}</div>
    </div>
  );
}
