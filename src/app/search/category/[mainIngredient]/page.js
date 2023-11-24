import Link from "next/link";
import BackBtn from "@/components/BackBtn";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import UpBtn from "@/components/UpBtn";

async function getMealsBySelectedMainIngredient(mainIngredient) {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${mainIngredient}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch " + mainIngredient + " list.");
  }
  return res.json();
}

export default async function MealsBySelectedMainIngredient({ params }) {
  const result = await getMealsBySelectedMainIngredient(params.mainIngredient);
  return (
    <div>
      <UpBtn />
      <ImageList>
        <ImageListItem key="Subheader" cols={5}>
          <ListSubheader component="div">
            {params.mainIngredient}
            <BackBtn />
          </ListSubheader>
        </ImageListItem>

        {result ? (
          result.meals.map((item) => (
            <Link href={`/search/menu/` + item.idMeal}>
              <ImageListItem key={item.idMeal}>
                <img
                  srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
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
    </div>
  );
}
