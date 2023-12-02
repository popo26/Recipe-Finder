import "../../page.module.css";
import Link from "next/link";
import Search from "@/components/Search";
import BackBtn from "@/components/BackBtn";
import UpBtn from "@/components/UpBtn";
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
    throw new Error("Failed to fetch data #" + name);
  }
  return res.json();
}

export default async function Menu({ searchParams }) {
  const term = searchParams.term ? searchParams.term : "";

  const data = await getMealByName(term);
  let resultList;
  if (data.meals != null) {
    resultList = data.meals.map((item) => (
      <div key={item.idMeal}>
        <Link href={`/search/menu/` + item.idMeal}>
          <Card
            sx={{
              width: 280,
              margin: "0 auto",
              padding: "0.1em",
              mb: 4,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.strMealThumb}
                alt={item.strMeal}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              />

              <CardContent sx={{ fontFamily: "Cascadia Mono" }}>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  sx={{ fontWeight: "900", fontSize: "1rem" }}
                >
                  {item.strMeal}
                </Typography>
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
    ));
  } else {
    resultList = <p>No meal found.</p>;
  }

  return (
    <div className="Menu">
      <UpBtn />
      <BackBtn />
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
      >
        {resultList}
      </Box>
    </div>
  );
}
