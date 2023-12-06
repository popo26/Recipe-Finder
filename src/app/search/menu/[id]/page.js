import "../../../../css/custom.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import BackBtn from "@/components/BackBtn";

async function getMealDetail(id) {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch meal #" + id);
  }
  return res.json();
}

export default async function MealDetail({ params }) {
  const result = await getMealDetail(params.id);
  const mealResult = result.meals[0];
  let strIngredientArray = [];
  let strMeasureArray = [];

  for (let key in mealResult) {
    if (
      key.includes("strIngredient") &&
      mealResult[key] !== "" &&
      key.includes("strIngredient") &&
      mealResult[key] !== null
    ) {
      strIngredientArray.push(mealResult[key]);
    }
  }

  for (let key in mealResult) {
    if (
      key.includes("strMeasure") &&
      mealResult[key] !== "" &&
      key.includes("strMeasure") &&
      mealResult[key] !== null
    ) {
      strMeasureArray.push(mealResult[key]);
    }
  }

  const ingredientsList = strIngredientArray.map((item) => (
    <p key={strIngredientArray.indexOf(item)}>
      {item} : {strMeasureArray[strIngredientArray.indexOf(item)]}
    </p>
  ));

  return (
    <div className="MealDetail">
      <BackBtn />

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
          <div className="MoreDetail-accordion">
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
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
