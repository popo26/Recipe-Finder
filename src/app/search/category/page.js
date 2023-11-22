import styles from "../../page.module.css";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <main className={styles.main}>
      <h1>Category</h1>
      <section>
        {/* {result ? (
          result.categories.map((item) => (
            <>
              <h3 key={item.idCategory}>
                <Link href={`/search/category/` + item.strCategory}>
                  {item.strCategory}
                </Link>
              </h3>
              <img
                src={item.strCategoryThumb}
                alt={item.strCategory}
                width="200px"
              />
              <p style={{ display: "none" }}>{item.strCategoryDescription}</p>
            </>
          ))
        ) : (
          <p>No information</p>
        )} */}

        <>
          {result ? (
            result.categories.map((item) => (
              <>
                {/* <h3 key={item.idCategory}>
                <Link href={`/search/category/` + item.strCategory}>
                  {item.strCategory}
                </Link>
              </h3>
              <img
                src={item.strCategoryThumb}
                alt={item.strCategory}
                width="200px"
              />
              <p style={{ display: "none" }}>{item.strCategoryDescription}</p> */}
                <Card sx={{ width: 1, mx:'auto', mb:4 }}>
                  <CardMedia
                    component="img"
                    alt={item.strCategory}
                    image={item.strCategoryThumb}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.strCategory}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.strCategoryDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"> <Link href={`/search/category/` + item.strCategory}>
                  Menus
                </Link></Button>
                  </CardActions>
                </Card>
              </>
            ))
          ) : (
            <p>No information</p>
          )}
        </>
      </section>
    </main>
  );
}
