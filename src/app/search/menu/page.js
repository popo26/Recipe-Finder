import styles from "../../page.module.css";
import Link from "next/link";
import Search from "@/components/Search";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";


import { CardActionArea } from "@mui/material";

async function getMealByName(name) {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    { method: "GET", mode: "cors" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post #" + name);
  }
  return res.json();
}

// export default async function Menu() {
export default async function Menu({ searchParams }) {
  const term = searchParams.term ? searchParams.term : "";
  const data = await getMealByName(term);
  const resultList = data.meals.map((item) => (
    <>
      {/* <div key={item.idMeal}>
        <Link href={`/search/menu/` + item.idMeal}>
          <h3>{item.strMeal}</h3>
          <img src={item.strMealThumb} alt={item.strMeal} width="200px" />
          <h5>Category: {item.strCategory}</h5>
          <h5>Nationality: {item.strArea}</h5>
        </Link> */}



  {data ? (
      <div key={item.idMeal}>
         <Link href={`/search/menu/` + item.idMeal}>
          {/* <Card sx={{ maxWidth: 345 }}> */}
          <Card
            sx={{
              width: 280,
              margin: "0 auto",
              padding: "0.1em",
              mb: 4,
            }}
          >
            <CardActionArea>
              {/* {item.strArea == "Unknown" ? ( */}
                <CardMedia
                  component="img"
                  height="105"
                  image={item.strMealThumb}
                  alt={item.strMeal}
                  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
           

              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                Category: {item.strCategory}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                Nationality: {item.strArea}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    // ))
  ) : (
    <p>Loading...</p>
  )}

    </>
  ));

 





  return (
    <div>
      <Search searchTerm={term} />
      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    margin: "auto",
    width: "90vw",
  }}
>{resultList}
    </Box>
    </div>
  );
}
