import styles from "../../page.module.css";
import Link from "next/link";

async function getMealCategory() {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/categories.php"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function Category() {
  const result = await getMealCategory();

  return (
    <main className={styles.main}>
      <h1>Category Information</h1>
      <section>
        {result ? (
          result.categories.map((item) => (
            <>
              <h3 key={item.idCategory}><Link href={`/search/category/${item.strCategory}`}>{item.strCategory}</Link></h3>
              <img src={item.strCategoryThumb} alt={item.strCategory} width="200px"/>
              <p style={{display:"none"}}>{item.strCategoryDescription}</p>
            </>
          ))
        ) : (
          <p>No information</p>
        )}
      </section>
    </main>
  );
}
