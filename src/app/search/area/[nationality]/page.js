import Link from "next/link";
import "../../../../css/custom.css";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import BackBtn from "@/components/BackBtn";
import UpBtn from "@/components/UpBtn";

async function getMealsByArea(nationality) {
  console.log("path", nationality);
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`,
    { method: "GET", mode: "cors" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch list of " + nationality + " meals.");
  }
  return res.json();
}

export default async function MealsByArea({ params }) {
  const result = await getMealsByArea(params.nationality);
  return (
    <div className="MealsByArea">
      <UpBtn />
      <BackBtn />
      <h1>{params.nationality}</h1>

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
        <ImageList variant="masonry" gap={8} cols={3}>
          {result.meals.map((item) => (
            <Link href={`/search/menu/` + item.idMeal}>
              <ImageListItem key={item.idMeal}>
                <img
                  srcSet={`${item.strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                  alt={item.strMeal}
                  loading="lazy"
                />
                <ImageListItemBar
                  position="below"
                  title={item.strMeal}
                  sx={{ fontFamily: "Cascadia Mono" }}
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}
