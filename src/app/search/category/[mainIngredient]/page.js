import Link from "next/link";
import BackBtn from "@/components/BackBtn";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material";

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
  //console.log("Params", params);
  return (
    <div>
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

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          margin: "auto",
          width: "90vw",
        }}
      > */}
      <ImageList>
        {/* <ImageList sx={{ width: 1, objectFit: "contain", p: "20px" }}> */}
        {/* <ImageListItem key="Subheader" cols={2}> */}
        <ImageListItem key="Subheader" cols={5}>
          <ListSubheader component="div">{params.mainIngredient}</ListSubheader>
        </ImageListItem>

        {result ? (
          result.meals.map((item) => (
            <Link href={`/search/menu/` + item.idMeal}>
              <ImageListItem key={item.idMeal}>
                <img
                  srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                  // srcSet={item.strMealThumb}
                  // src={item.strMealThumb}
                  alt={item.strMeal}
                  loading="lazy"
                  sx={{
                    maxWidth: 280,
                    margin: "0 auto",
                    padding: "0.1em",
                    mb: 4,
                  }}
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
      {/* </Box> */}
      <BackBtn/>

    </div>
  );
} // ++ Try adding Next Post and Previous Post links
