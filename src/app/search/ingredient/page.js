import styles from "../../page.module.css";

async function getIngredient() {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function Ingredient() {
  const result = await getIngredient();
  return (
    <main className={styles.main}>
      <h1>Available Ingredients</h1>
      <section>
        {result ? (
          result.meals.map((item) => (
            <>
            <h3 key={item.idIngredient}>{item.strIngredient}</h3>
            <p style={{display:"none"}}>{item.strDescription}</p><br/>
            </>
          ))
        ) : (
          <p>No information</p>
        )}
      </section>
    </main>
  );
}