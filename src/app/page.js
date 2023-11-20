import Image from "next/image";
import styles from "./page.module.css";
import SearchLinks from "@/components/SearchLinks";


async function getRandomMeal() {
  const res = await fetch("http://www.themealdb.com/api/json/v1/1/random.php");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function HomePage() {
  const result = await getRandomMeal();
  return (
    <main className={styles.main}>
      <section>
        <h1>Wanna try this?</h1>
        <img src={result.meals[0].strMealThumb + "/preview"} width="300px" />
        <h3>{result.meals[0].strMeal}</h3>
      </section>
      <section>
        <SearchLinks />
      </section>
    </main>
  );
}
