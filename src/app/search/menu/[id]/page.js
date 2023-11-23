import Link from "next/link";
import styles from "../../../../css/custom.css";
import { Button } from "@mui/material";
import Video from "@/components/Video";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

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
  //console.log("Params", params);

  const x = result.meals[0];
  let strIngredientArray = [];
  let strMeasureArray = [];
  for (let y in x) {
    if (y.includes("strIngredient") && x[y] !== "") {
      strIngredientArray.push(x[y]);
    }
  }

  for (let y in x) {
    if (y.includes("strMeasure") && x[y] !== "") {
      strMeasureArray.push(x[y]);
    }
  }

  // console.log("ingredent", strIngredientArray);
  // console.log("measurement", strMeasureArray);

  const ingredientsList = strIngredientArray.map((item) => (
    <p>
      {item} : {strMeasureArray[strIngredientArray.indexOf(item)]}
    </p>
  ));

  return (
    <div className="MealDetail">
      {result ? (
        <>
          <h1>{result.meals[0].strMeal}</h1>
          <section>
            <h3>Ingredients: </h3>
            <div>{ingredientsList}</div>
          </section>
          <div className="MealDetail-img-div">
            <img
              src={result.meals[0].strMealThumb}
              alt={result.meals[0].strMeal}
              width="200px"
            />
            <h4>
              <em>Category: </em>
              {result.meals[0].strCategory}
            </h4>
            <h4>
              <em>Area: </em>
              {result.meals[0].strArea}
            </h4>
          </div>

          {/* <Video videoLink={result.meals[0].strYoutube}/> */}
          {/* <h3>Instruction: </h3>
          <aside>{result.meals[0].strInstructions}</aside> */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                gutterBottom
                variant="9"
                component="div"
                sx={{ fontFamily: "Cascadia Mono" }}
              >
                Instructions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Cascadia Mono" }}
              >
                {result.meals[0].strInstructions}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="back-btn">
        <Link href="/search/category">
          <Button
            sx={{
              fontFamily: "Cascadia Mono",
              backgroundColor: "#308080",
              color: "white",
            }}
          >
            Back to All Categories
          </Button>
        </Link>
      </div>
    </div>
  );
} // ++ Try adding Next Post and Previous Post links
