import Link from "next/link";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

async function getMealsBySelectedMainIngredient(mainIngredient) {
  console.log("path", mainIngredient);
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
  const result = await getMealsBySelectedMainIngredient(params.mainIngredient);
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
      <Link href="/search/category">All Categories</Link> */}

      <ImageList sx={{ width: 1, objectFit: "contain", p: "20px" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">{params.mainIngredient}</ListSubheader>
        </ImageListItem>
        {result ? (
          result.meals.map((item) => (
            <Link href={`/search/menu/` + item.idMeal}>
              <ImageListItem key={item.idMeal} sx={{ p: "10px" }}>
                <img
                  srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                  alt={item.strMeal}
                  loading="lazy"
                />

                <ImageListItemBar
                  title={item.strMeal}
                  // subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.strMeal}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ImageList>
    </>
  );
} // ++ Try adding Next Post and Previous Post links

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
