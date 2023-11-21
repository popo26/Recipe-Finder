import styles from "../../page.module.css";
import Link from "next/link";

async function getArea() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function Area() {
  const result = await getArea();
  return (
    <main className={styles.main}>
      <h1>Area Information</h1>
      <section>
        {result ? (
          result.meals.map((item) => (
            <>
              <div key={item.strArea}>
                <Link href={`/search/area/${item.strArea}`}>
                  <button key={item.strArea}>{item.strArea}</button>
                </Link>
              </div>
            </>
          ))
        ) : (
          <p>No information</p>
        )}
      </section>
    </main>
  );
}
