"use client";
import "../css/custom.css";
import { North } from "@mui/icons-material";

export default function UpBtn() {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button className="UpBtn" onClick={handleClick}>
      <North sx={{ color: "whitesmoke", fontWeight: "bolder" }} />
    </button>
  );
}
