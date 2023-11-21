import Link from "next/link";

async function getMealDetail(id) {
  console.log("path", id);
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + id);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment
export default async function MealDetail({ params }) {
  const result = await getMealDetail(params.id);
  console.log("Params", params);
  return (
    <>
      <div>
        {result ? (
          <>
            <h3>{result.meals[0].strMeal}</h3>
            <img
              src={result.meals[0].strMealThumb}
              alt={result.meals[0].strMeal}
              width="50px"
            />
            <video width="320" height="240" controls>
              {" "}
              <source src={result.meals[0].strYoutube} type="video/mp4" />
            </video>
            <aside>{Object.values(result.meals[0])}</aside>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link href="/search/category">All Categories</Link>
    </>
  );
} // ++ Try adding Next Post and Previous Post links
