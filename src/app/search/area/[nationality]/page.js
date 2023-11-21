import Link from "next/link";

async function getMealsByNationality(nationality) {
  console.log("path", nationality);
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + nationality);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment
export default async function MealsByNationality({ params }) {
  const result = await getMealsByNationality(params.nationality);
  console.log("Params", params);
  return (
    <>
      <div>
        {result ? (
          result.meals.map((item) => (
            <>
              <h3 key={item.idMeal}>
                <Link href={`/search/menu/` + item.idMeal}>{item.strMeal}</Link>
              </h3>
              <img src={item.strMealThumb} alt={item.strMeal} width="100px" />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link href="/search/area">All Area</Link>
    </>
  );
} // ++ Try adding Next Post and Previous Post links
