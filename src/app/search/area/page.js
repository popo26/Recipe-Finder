"use client";
import styles from "../../page.module.css";
import Link from "next/link";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";





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

export default async function Area() {
  const result = await getArea();

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
      {result ? (
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
      )}
    </>
  );
}
