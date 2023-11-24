import "../../page.module.css";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackBtn from "@/components/BackBtn";
import UpBtn from "@/components/UpBtn";

async function getMealCategory() {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/categories.php"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + type);
  }
  return res.json();
}

export default async function Category() {
  const result = await getMealCategory();

  return (
    <div className="Category">
      <UpBtn />
      <BackBtn />

      <h1>Category</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          margin: "auto",
          width: "100vw",
        }}
      >
        {result ? (
          result.categories.map((item) => (
            <Card
              sx={{
                maxWidth: 280,
                margin: "0 auto",
                padding: "0.1em",
                mb: 4,
              }}
            >
              <CardMedia
                component="img"
                alt={item.strCategory}
                image={item.strCategoryThumb}
                height="250"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              />
              <CardActions>
                <Button size="small">
                  {" "}
                  <Link href={`/search/category/` + item.strCategory}>
                    Menus
                  </Link>
                </Button>
              </CardActions>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Cascadia Mono" }}
                  >
                    {item.strCategory}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "Cascadia Mono" }}
                  >
                    {item.strCategoryDescription}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </div>
  );
}
