import { v4 as uuidv4 } from "uuid";
import "../../page.module.css";
import Link from "next/link";
import Flag from "react-world-flags";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BackBtn from "@/components/BackBtn";
import UpBtn from "@/components/UpBtn";

const flags = {
  American: "us",
  British: "gb",
  Canadian: "ca",
  Chinese: "cn",
  Croatian: "hr",
  Dutch: "nl",
  Egyptian: "eg",
  Filipino: "ph",
  French: "fr",
  Greek: "gr",
  Indian: "in",
  Irish: "ie",
  Italian: "it",
  Jamaican: "jm",
  Japanese: "jp",
  Kenyan: "ke",
  Malaysian: "my",
  Mexican: "mx",
  Moroccan: "ma",
  Polish: "pl",
  Portuguese: "pt",
  Russian: "ru",
  Spanish: "es",
  Thai: "th",
  Tunisian: "tn",
  Turkish: "tr",
  Unknown: "unknown",
  Vietnamese: "vn",
};

async function getArea() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Area list");
  }
  return res.json();
}

export default async function Area() {
  const result = await getArea();

  return (
    <div className="Area">
      <UpBtn />
      <BackBtn />
      <h1>Meals by Area</h1>
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
        {result ? (
          result.meals.map((item) => (
            <div key={uuidv4()}>
              <Link href={`/search/area/${item.strArea}`}>
                <Card
                  sx={{
                    width: 280,
                    margin: "0 auto",
                    padding: "0.1em",
                    mb: 4,
                  }}
                >
                  <CardActionArea>
                    {item.strArea == "Unknown" ? (
                      <CardMedia
                        component="img"
                        height="105"
                        image={
                          "https://media.giphy.com/media/xUOxfjsW9fWPqEWouI/giphy.gif"
                        }
                        alt={item.strArea}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                      />
                    ) : (
                      <Flag
                        code={flags[item.strArea]}
                        style={{
                          padding: "1em 1em 0 1em",
                          objectFit: "contain",
                          height: "100px",
                          width: "90%",
                          margin: "auto",
                        }}
                      />
                    )}

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontFamily: "Cascadia Mono" }}
                      >
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
      </Box>
    </div>
  );
}
