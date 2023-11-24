import "../../css/custom.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackBtn from "@/components/BackBtn";
import UpBtn from "@/components/UpBtn";

async function getIngredient() {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch ingredient list.");
  }
  return res.json();
}

export default async function Ingredient() {
  const result = await getIngredient();
  return (
    <div className="Ingredient">
      <UpBtn />
      <BackBtn />
      <h1>Available Ingredients</h1>

        <div className="Ingredient-list-div">
          {result ? (
            result.meals.map((item) => (
              <div key={item.idIngredient}>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography sx={{ fontFamily: "Cascadia Mono" }}>
                      {item.strIngredient}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ fontFamily: "Cascadia Mono" }}>
                      {item.strDescription}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          ) : (
            <p>No information</p>
          )}
          <BackBtn />
        </div>
    </div>
  );
}
