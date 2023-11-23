"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from '../css/custom.css';

export default function BackBtn() {
  const router = useRouter();

  return (
    <div className="BackBtn">
    <Button
      onClick={router.back}
      sx={{
        fontFamily: "Cascadia Mono",
        backgroundColor: "#308080",
        color: "white",
        
      }}
    >
      Back
    </Button>
    </div>
  );
}
