import styles from "../page.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

async function getIngredient() {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function Ingredient() {
  const result = await getIngredient();
  return (
    <main className={styles.main}>
      <h1>Available Ingredients</h1>
      <div>
        {/* <Search searchTerm={term} /> */}
      </div>
      <section>
        {result ? (
          result.meals.map((item) => (
            <div key={item.idIngredient}>
              {/* <h3 key={item.idIngredient}>{item.strIngredient}</h3>
            <p >{item.strDescription}</p><br/> */}

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{item.strIngredient}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.strDescription}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))
        ) : (
          <p>No information</p>
        )}
      </section>
    </main>
  );
}
