import Link from "next/link";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

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
          <h2>{params.nationality}</h2>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          margin: "auto",
          width: "90vw",
        }}
      >
        <ImageList variant="masonry" cols={4} gap={8}>
          {/* <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div">{params.nationality}</ListSubheader>
        </ImageListItem> */}
          {result.meals.map((item) => (
            <ImageListItem key={item.idMeal}>
              <img
                srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                alt={item.strMeal}
                loading="lazy"
              />
              <Link href={`/search/menu/` + item.idMeal}>
                <ImageListItemBar position="below" title={item.strMeal}  sx={{fontFamily:"Cascadia Mono" }} />
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Link href="/search/area">All Area</Link>
    </>
  );
} // ++ Try adding Next Post and Previous Post links
