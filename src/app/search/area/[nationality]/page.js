import Link from "next/link";

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';





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
      {/* <div>
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
      <Link href="/search/area">All Area</Link> */}

<Box sx={{ width: 1, height: 1, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {result.meals.map((item) => (
          <ImageListItem key={item.idMeal}>
            <img
              srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
              alt={item.strMeal}
              loading="lazy"
            />
            <Link href={`/search/menu/` + item.idMeal}><ImageListItemBar position="below" title={item.strMeal} /></Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>



    </>
  );
} // ++ Try adding Next Post and Previous Post links
