"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import '../css/custom.css';
import { Reply } from "@mui/icons-material";

export default function BackBtn() {
  const router = useRouter();

  return (
    <Button
      onClick={router.back}
      sx={{
        fontFamily: "Cascadia Mono",
        backgroundColor: "#308080",
        color: "white",
        my:"10px",
        float:"right",
        '&:hover':{backgroundColor:"transparent", color:"#308080"}
      }}
    >
      <Reply/>
    </Button>
  );
}
