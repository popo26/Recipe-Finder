import Link from "next/link";

async function getMealsBySelectedMainIngredient(mainIngredient) {
  console.log(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${mainIngredient}`
  );
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${mainIngredient}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + mainIngredient);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment
export default async function MealsBySelectedMainIngredient({ params }) {
  // so for /posts/3/, params will be { id:3 }
  console.log("params", params);
  const result = await getMealsBySelectedMainIngredient(params.strMeal);
  console.log(result);
  return (
    <>
      <div>
        {result ? (
          result.meals.map((item) => (
            <>
              <h3 key={item.idMeal}>{item.strMeal}</h3>
              <img src={strMealThumb} alt={item.strMeal} width="100px" />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link href="/search/category">All Categories</Link>
    </>
  );
} // ++ Try adding Next Post and Previous Post links
