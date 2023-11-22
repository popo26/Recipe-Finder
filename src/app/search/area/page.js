"use client";
import styles from "../../page.module.css";
import Link from "next/link";
import Flag from "react-world-flags";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const flags = [
  { American: "us" },
  { British: "uk" },
  { Canadian: "ca" },
  { Chinese: "cn" },
  { Croatian: "hr" },
  { Dutch: "nl" },
  { Egyptian: "eg" },
  { Filipino: "ph" },
  { French: "fr" },
  { Greek: "gr" },
  { Indian: "in" },
  { Irish: "ie" },
  { Italian: "it" },
  { Jamaican: "jm" },
  { Japanese: "jp" },
  { Kenyan: "ke" },
  { Malaysian: "my" },
  { Mexican: "mx" },
  { Moroccan: "ma" },
  { Polish: "pl" },
  { Portiguese: "pt" },
  { Russian: "ru" },
  { Spanish: "es" },
  { Thai: "th" },
  { Tunisian: "tn" },
  { Turkish: "tr" },
  { Unknown: "cn" },
  { Vietnamese: "vn" },
];

//MUI - Grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

async function getArea() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #");
  }
  return res.json();
}

// async function searchImage(term) {
//   // const response = await axios.get("https://api.unsplash.com/search/photos", {
//   const response = await fetch(
//     `https://api.unsplash.com/search/photos?page=1&query=${term}`,
//     {
//       headers: {
//         Authorization: `Client-ID ${process.env.REACT_APP_API_ACCESS_KEY}`,
//       },
//       params: {
//         query: term,
//       },
//     }
//   );
//   return response.data.results;
// }

async function searchFlag(term) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_ACCESS_KEY}&page=1&per_page=1&query=${term}-flag`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post #" + term);
  }
  return res.json();
}

export default async function Area() {
  const result = await getArea();

  // const flags = await searchFlag("american");
  // console.log(flags["results"][0].urls.small);

  return (
    // <main className={styles.main}>
    //   <h1>Area Information</h1>
    //   <section>
    //     {result ? (
    //       result.meals.map((item) => (
    //         <>
    //           <div key={item.strArea}>
    //             <Link href={`/search/area/${item.strArea}`}>
    //               <button key={item.strArea}>{item.strArea}</button>
    //             </Link>
    //           </div>
    //         </>
    //       ))
    //     ) : (
    //       <p>No information</p>
    //     )}
    //   </section>
    // </main>
    <>
      <h1>Nationalities</h1>
      <hr />
      {/* {result ? (
        result.meals.map((item) => (
          <div key={item.strArea}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Link href={`/search/area/${item.strArea}`}>
                    <Item>{item.strArea}</Item>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )} */}

      {result ? (
        result.meals.map((item) => (
          <div key={item.strArea}>
            <Link href={`/search/area/${item.strArea}`}>
              <Card sx={{ maxWidth: 345 }}>
                <Flag code={flags[item.strArea]} />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={null}
                    alt={item.strArea}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.strArea}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
